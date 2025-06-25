export interface EmailData {
  from_name: string;
  from_email: string;
  company: string;
  message: string;
  to_email: string;
}

export const sendEmail = async (emailData: EmailData): Promise<void> => {
  
  await new Promise(resolve => setTimeout(resolve, 1500));

  if (emailData.from_name && emailData.from_email && emailData.message) {
    return Promise.resolve();
  }
  
  throw new Error('Missing required email fields');
};
