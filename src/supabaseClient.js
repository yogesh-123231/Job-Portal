// src/supabaseClient.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vwinnacxihohmpzgeosj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZ3aW5uYWN4aWhvaG1wemdlb3NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIzOTQyOTIsImV4cCI6MjA2Nzk3MDI5Mn0.XyEHPSUcbOYHd6dCWJa48ug1xOwr5MC545zWalwNa-4';

export const supabase = createClient(supabaseUrl, supabaseKey);
