
// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://gdydyyjpsqzpjcvcawhy.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdkeWR5eWpwc3F6cGpjdmNhd2h5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzMzAyNzksImV4cCI6MjA1NjkwNjI3OX0.-0ATCHAR7ymGdZbC0W6sQeszIeozja4F1PazkhZRC8k";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
