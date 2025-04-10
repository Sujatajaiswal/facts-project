// supabase.js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lzbguqiwsegqpbsajwbb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6Ymd1cWl3c2VncXBic2Fqd2JiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMTUyOTQsImV4cCI6MjA1OTY5MTI5NH0.KVfBy0g5wDAs_bVRpsOvF9-W1vKc3II3187hXk2OP3w";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
