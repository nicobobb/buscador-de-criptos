const Coin = ({ name, icon, price, symbol }) => {
    return (
        <div className="m-3 border-2 shadow-lg p-6">
            <ul>
                <img className="w-10" src={icon} />
                <li className="font-bold text-lg mt-1">
                    {name} <span className="text-xs">({symbol})</span>
                </li>
                <li className="text-slate-700 mt-1">
                    {price.toLocaleString('en-US', {
                        style: 'currency',
                        currency: 'USD',
                        minimumFractionDigits: 1,
                        maximumFractionDigits: 5,
                    })}{' '}
                    <span className="font-bold text-xs">USD</span>
                </li>
            </ul>
        </div>
    )
}

export default Coin
