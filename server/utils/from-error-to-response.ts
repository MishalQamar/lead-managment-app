import { z } from 'zod';

export const fromErrorToResponse = (error: unknown) => {
  if (error instanceof z.ZodError) {
    return {
      status: 400,
      message: error.issues,
    };
  } else if (
    error instanceof Error &&
    error.message === 'Email already exists'
  ) {
    return {
      status: 409,
      message: 'Email already exists',
    };
  } else if (error instanceof Error) {
    return {
      status: 500,
      message: error.message,
    };
  } else {
    return {
      status: 500,
      message: 'Internal server error',
    };
  }
};
