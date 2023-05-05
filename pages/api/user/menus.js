import { createServerSupabaseClient } from '@supabase/auth-helpers-nextjs';

const handler = async (req, res) => {
  // console.log(req);
  const supabaseServerClient = createServerSupabaseClient({
    req,
    res,
  });
  const user = await supabaseServerClient.auth.getUser();
  const { name, id } = req.body;

  let data;
  let menus;
  switch (req.method) {
    case "GET":
      data = await supabaseServerClient
        .from("menus")
        .select("id, name")
        .eq("user_id", user.id);

      if (data.error) res.status(400).json({ error: "you have no menus" });
      else res.status(200).json({ menus: data });
    default:
      res.status(500).end();
  }
  // case "POST":
  //   menus = await supabaseServerClient
  //     .from("menus")
  //     .insert({ name: name, user_id: user.id })
  //     .select("id, name");
  //   if (menus.error)
  //     res.status(menus.status).json({ error: menus.statusText });
  //   else {
  //     console.log("menu successfully added:", menus.data);
  //     res.status(201).json(menus.data);
  //   }
  //   break;

  // case "DELETE":
  //   menus = await supabaseServerClient
  //     .from("menus")
  //     .delete()
  //     .eq("name", name)
  //     .select("id", "name");
  //   if (menus.error)
  //     return res.status(menus.status).json({ error: menus.statusText });
  //   else {
  //     console.log("deleted menu", menus.data);
  //     return res.status(200).json(menus.data);
  //   }

  // case "PATCH":
  //   menus = await supabaseServerClient
  //     .from("menus")
  //     .update({ name: name })
  //     .eq("id", id)
  //     .select("id, name");
  //   if (menus.error)
  //     return res.status(menus.status).json({ error: menus.statusText });
  //   else {
  //     console.log("menu after update", menus.data);
  //     return res.status(200).json(menus.data);
  //   }
};

export default handler;
