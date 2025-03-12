// user-platform/src/lib/utils/supabase.ts
import { createClient } from '@supabase/supabase-js';

// Normalmente estas variables estarían en .env.local
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);