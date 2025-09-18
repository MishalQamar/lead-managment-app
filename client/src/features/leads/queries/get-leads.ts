type Lead = {
  id: string;
  name: string;
  email: string;
  status: string;
  createdAt: string;
};

type LeadsResponse = {
  leads: Lead[];
};

export const getLeads = async (): Promise<LeadsResponse> => {
  const response = await fetch(
    'https://lead-managment-app.onrender.com/api/leads'
  );
  const data = await response.json();
  return data;
};
