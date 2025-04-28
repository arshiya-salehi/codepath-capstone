import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://ojgsjeeccefazmdbaksm.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9qZ3NqZWVjY2VmYXptZGJha3NtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU3OTY1MjMsImV4cCI6MjA2MTM3MjUyM30.JCv_ASjGfKPkdQbIYdSwrv5AZqrXP12aIhte3NHQcRw';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});
