
import { createClient } from '@supabase/supabase-js'
import { Database } from './database.types';

// Create a single supabase client for interacting with your database
const supabase = createClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!);

export default supabase;

export async function getProducts() {
  return await supabase.from('products').select('*')
}