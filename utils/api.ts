// Helper functions for API calls

export const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8081';

export async function submitContactForm(formData: any) {
  try {
    const response = await fetch(`${API_BASE_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || 'Failed to send message');
    }

    return await response.json();
  } catch (error: any) {
    console.error('Contact form error:', error);
    throw error;
  }
}
