import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="home">
        <div className="home_list">
          <p>My name is</p>
          <p>Habibullo Hikmatullayev</p>
          <p>Front-end Developer</p>
          <div>
            <div className="social_network">
              <Link target="_blank" href="https://t.me/Habibullo_2901">
                <Image src="/telegramimg.png" alt="telegram" width={40} height={40} />
              </Link>
              <Link target="_blank" href="https://github.com/Habibullo2901">
                <Image src="/github.webp" alt="github" width={40} height={40} />
              </Link>
              <Link target="_blank" href="https://www.instagram.com/khikmatullaev_h">
                <Image src="/instagram.png" alt="instagram" width={40} height={40} />
              </Link>
            </div>
          </div>
        </div>
        <div className="img_background">
          <Image
            src="/Habibullo.png"
            alt="Habibullo Hikmatullayev"
            width={380}
            height={650}
            priority
          />
        </div>
      </div>
    </main>
  );
}
