// special SSR image component
import Image from "next/image"
import styles from '../styles/About.module.css'
export default function About() {
    return (
        <>
            <h1>About</h1>
            <p className={[styles.extraGreen, styles.bigFont].join(" ")}>I am a super cool software engineer now. I make super cool stuff with the codes.</p>
            <div>
                <style jsx>{`
                    .orangeText {
                        color: orange;
                    }
                    p {
                        font-size: 30px;
                    }
                `}</style>
                <p className="orangeText">I love to code and would love to code for your company!</p>
            </div>
            {/* loading an image locally */}
            {/* <Image 
            // assumes you are in the public folder
                src='/sushi.jpeg'
                alt='my fav dish'
                width={500}
                height={500}
            /> */}
            <Image 
                src='https://placekitten.com/300/300'
                alt='a magnificate'
                width={300}
                height={300}
            />

        </>
    )
}