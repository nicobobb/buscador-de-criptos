import { useEffect, useState } from 'react'
import Axios from 'axios'
import Coin from './components/Coin'

function App() {
    const [listCoins, setListCoins] = useState([])
    const [searchWord, setSearchWord] = useState('')

    useEffect(() => {
        Axios.get('https://api.coinstats.app/public/v1/coins?skip=0').then(
            (res) => {
                setListCoins(res.data.coins)
            }
        )
    }, [])

    const filteredCoins = listCoins.filter((coin) =>
        coin.name.toLowerCase().includes(searchWord.toLocaleLowerCase())
    )

    return (
        <div>
            <header className="bg-slate-700 text-center p-3">
                <h1 className="text-orange-50 text-3xl tracking-wider p-3 font-sans">
                    Criptomonedas
                </h1>
                <input
                    className="border-2 p-3 m-2 w-1/5 placeholder-gray-400"
                    type="text"
                    placeholder="Bitcoin..."
                    onChange={(e) => {
                        setSearchWord(e.target.value)
                    }}
                />
            </header>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2">
                {filteredCoins.map((coin) => {
                    return (
                        <Coin
                            key={coin.id}
                            name={coin.name}
                            icon={coin.icon}
                            price={coin.price}
                            symbol={coin.symbol}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default App
