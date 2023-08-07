import { useState } from "react"

type FormProps = {
    setEmail: any
}

const Form = ({setEmail}: FormProps) => {
    const [hasBeenChecked, setHasBeenChecked] = useState(false)
    const [email, setEnteredEmail] = useState('')

    const handleFormSubmit = (e: any) => {
        const regexExp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/gi;
        const data = new FormData(e.target)
        console.log(Object.fromEntries(data.entries()))
        if (regexExp.test(email)) {
            setEmail(email)
        }
        setHasBeenChecked(true)
        e.preventDefault()
    }

    return (
      <form className="grid gap-7"  onSubmit={handleFormSubmit}>
            <div>
                    <div className="flex justify-between">
                        <label className="text-sm font-heavy">
                            Email address
                        </label>
                        <p className="text-tomato">
                            {hasBeenChecked ? 'Valid Email Required' : ''}
                        </p>
                    </div>
                    <input placeholder="email@company.com"
                        className={`border-2 border-gray/40 py-4 px-5
                        rounded-lg w-full mt-3
                        ${hasBeenChecked? 'text-tomato bg-tomato/30 border-tomato' : ''}`}
                        value={email} onChange={(e:any) => setEnteredEmail(e.target.value)}>
                    </input>
            </div>
            <button className="bg-dark_slate_gray text-white py-4
                rounded-lg font-heavy tracking-wide">
                Subscribe to monthly newsletter
            </button>
      </form>
    )
}

export default Form