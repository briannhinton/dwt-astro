export default function (random: Array<string>) {
  return random.map(item => item)[Math.floor(Math.random() * random.length)]
}
