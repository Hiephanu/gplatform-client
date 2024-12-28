
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://kfjejzhrtcpnygnguptj.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtmamVqemhydGNwbnlnbmd1cHRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1ODYzMjYsImV4cCI6MjA0OTE2MjMyNn0.5Ro1sdUGl0ohNLgis1eYYiJ8L8T1R1OSsNcG2rbThp0';

export const supabase = createClient(supabaseUrl, supabaseKey);
        