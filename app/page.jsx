import Feed from "@components/Feed"

const Home = () => {
    return (
        <section className="w-full flex-center flex-col">

            <h1 className="head_text text-center">
                Discover & Share
                <br className="max-md:hidden" />
                <span className="orange_gradient text-center"> AI-Powerd promt</span>
            </h1>

            <p className="desc text-center">
                Artificial Intelligence (AI) refers to the simulation of human intelligence
                in machines that are programmed to think and learn like humans.
            </p>
            <Feed className='mb-40' />

        </section>
    )
}

export default Home
