import { useState, useEffect } from 'react'

type Props = {
  Yes: string
  No: string
}

export const SearchDate = ({ Yes, No }: Props) => {
  const [isFounded, setIsFounded] = useState<boolean | null>(null)
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    // monitoring date in real time
    const timeout = setTimeout(() => {
      setDate(new Date)

      // if it's Jun 1, set 'isFounded' to true
      if ((date.getMonth() === 5) && (date.getDate() === 1)) {
        setIsFounded(true)
      } else {
        setIsFounded(false)
      }
    }, 0);
    return () => {
      clearTimeout(timeout)
    }
  }, [date])

  return (
    <section>
      <h1>
        {isFounded ? Yes : No}
      </h1>
    </section>
  )
}