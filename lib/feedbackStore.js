const STORAGE_KEY = 'bengenharia-feedbacks';
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
const TABLE_NAME = import.meta.env.VITE_SUPABASE_FEEDBACK_TABLE || 'feedbacks';

const isSupabaseReady = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

const getEndpoint = (query = '') => {
  const baseUrl = SUPABASE_URL.replace(/\/$/, '');
  return `${baseUrl}/rest/v1/${TABLE_NAME}${query ? `?${query}` : ''}`;
};

const getHeaders = (extraHeaders = {}) => ({
  apikey: SUPABASE_ANON_KEY,
  Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
  ...extraHeaders,
});

export const feedbackStoreMode = isSupabaseReady ? 'supabase' : 'local';

export const getLocalFeedbacks = () => {
  try {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || '[]');
  } catch (error) {
    return [];
  }
};

const setLocalFeedbacks = (feedbacks) => {
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(feedbacks));
};

export const listFeedbacks = async () => {
  if (!isSupabaseReady) {
    return getLocalFeedbacks();
  }

  const response = await fetch(
    getEndpoint('select=id,name,text,rating,created_at&order=created_at.desc&limit=20'),
    { headers: getHeaders() }
  );

  if (!response.ok) {
    throw new Error('Nao foi possivel carregar os feedbacks.');
  }

  const rows = await response.json();

  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    text: row.text,
    rating: Number(row.rating),
    date: new Date(row.created_at).toLocaleDateString('pt-BR'),
  }));
};

export const createFeedback = async ({ name, text, rating }) => {
  const feedback = {
    name: name || 'Cliente',
    text,
    rating: Number(rating),
  };

  if (!isSupabaseReady) {
    const localFeedback = {
      ...feedback,
      id: Date.now(),
      date: new Date().toLocaleDateString('pt-BR'),
    };
    const updatedFeedbacks = [localFeedback, ...getLocalFeedbacks()].slice(0, 20);
    setLocalFeedbacks(updatedFeedbacks);
    return localFeedback;
  }

  const response = await fetch(getEndpoint(), {
    method: 'POST',
    headers: getHeaders({ Prefer: 'return=representation' }),
    body: JSON.stringify(feedback),
  });

  if (!response.ok) {
    throw new Error('Nao foi possivel publicar o feedback.');
  }

  const [row] = await response.json();

  return {
    id: row.id,
    name: row.name,
    text: row.text,
    rating: Number(row.rating),
    date: new Date(row.created_at).toLocaleDateString('pt-BR'),
  };
};

export const deleteFeedback = async (id) => {
  if (!isSupabaseReady) {
    setLocalFeedbacks(getLocalFeedbacks().filter((feedback) => String(feedback.id) !== String(id)));
    return;
  }

  const response = await fetch(getEndpoint(`id=eq.${id}`), {
    method: 'DELETE',
    headers: getHeaders(),
  });

  if (!response.ok) {
    throw new Error('Nao foi possivel remover o feedback.');
  }
};
