export async function signInUseSupabase({ supabase }) {
    let redirectTo;
    if(process.env.NEXT_PUBLIC_SANDBOX=='true') {
        redirectTo = 'http://localhost:3000/apps'
        //redirectTo = 'https://joy-d.vercel.app/apps'
    } else {
        redirectTo = 'https://joy-d.vercel.app/apps'
       //redirectTo = 'http://zhouguowei.com/apps'
    }

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
            redirectTo: redirectTo
          }
    })
}