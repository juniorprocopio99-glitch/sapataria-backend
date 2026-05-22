const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://vedxvyuvmqfbkcphlnhl.supabase.co';
const supabaseKey = 'sb_publishable_P2uqXaOJNS1Hmfvy9XpEbg_9DssHAjy';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;