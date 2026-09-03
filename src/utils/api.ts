interface ContactData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface SubmitResponse {
  success: boolean;
  message: string;
}

export const submitContactForm = async (data: ContactData): Promise<SubmitResponse> => {
  const endpoint = import.meta.env.VITE_CONTACT_API_ENDPOINT;

  if (!endpoint) {
    // Simulate network request for demo purposes
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: 'Thank you for reaching out! This is a simulated response since no API endpoint is configured.'
        });
      }, 1500);
    });
  }

  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
      signal: controller.signal
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error(`Server responded with ${response.status}`);
    }

    return {
      success: true,
      message: 'Message sent successfully!'
    };
  } catch (error) {
    clearTimeout(timeoutId);
    
    const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
    
    return {
      success: false,
      message: error instanceof DOMException && error.name === 'AbortError' 
        ? 'Request timed out. Please try again.' 
        : `Failed to send message: ${errorMessage}`
    };
  }
};
