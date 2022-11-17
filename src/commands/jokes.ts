import axios from "axios";

const API = "https://v2.jokeapi.dev/joke/Programming,Miscellaneous,Dark,Pun,Spooky,Christmas?blacklistFlags=sexist&type=single"

export const randomJokes = (channel: any) => {
  axios.get(API)
  .then((res) => {
    channel.reply(res.data.joke)
  })
  .catch((err) => console.error(err))
}
