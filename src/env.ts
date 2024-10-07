import { z } from 'zod';

const parsedEnvValues = {
  VITE_API_URL: import.meta.env.VITE_API_URL,
  VITE_ENABLE_MOCKS: import.meta.env.VITE_ENABLE_MOCKS === 'true',
};

const envSchema = z.object({
  VITE_API_URL: z.string().url(),
  VITE_ENABLE_MOCKS: z.boolean().optional().default(false),
});

const env = envSchema.safeParse(parsedEnvValues);

if (!env.success) {
  console.error('❌ Invalid environment variables:', env.error.format());
  throw new Error('Invalid environment variables');
}

export const parsedEnv = env.data;
