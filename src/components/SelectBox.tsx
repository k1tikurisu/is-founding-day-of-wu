type Props = {
  doChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SelectBox = ({ doChange }: Props) => {
  const langs = [
    { name: 'JAPANESE', path: '/'},
    { name: 'ENGLISH', path: '/en' }
  ]

  return (
    <select name='language' onChange={doChange}>
      {langs.map((lang) => {
        return <option key={lang.name} value={lang.path}>{lang.name}</option>
      })}
    </select>
  )
}
