import Button from '../components/Button'
import cakeShop from '../assets/cake_shop2.jpg'

function Home() {
    return (
        <div className='bg-[image:var(--image-url)] h-dvh bg-cover bg-center' style={{'--image-url': `url(${cakeShop})`}}>
            <div className='h-24'></div>
            {/* <div className='relative mt-80 mb-6 flex flex-col text-center border-pink-700 bg-pink-300 w-64 p-5 rounded-2xl mx-auto sm:w-96'>
                <h1 className='mb-4 text-4xl text-white font-light drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>Welcome to
                    <span> Sugar!</span>
                </h1>
                <p className='text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>We make desserts</p>
                <Button 
                    link='/shop' 
                    text='SHOP NOW'
                />
            </div> */}
        </div>
    )
}

export default Home