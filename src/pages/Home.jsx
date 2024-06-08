import Button from '../components/Button'

function Home() {
    return (
        <>
            <h1>Welcome to Sugar!</h1>
            <p>We like eating desserts</p>
            <p>You can have some too!</p>
            <Button 
                link='/shop' 
                text='SHOP NOW'
            />
        </>
    )
}

export default Home