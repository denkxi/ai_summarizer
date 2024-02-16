import { logo, logo1 } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo1} alt="ai_logo" className='w-36 object-contain' />

        <button
          type="button"
          onClick={() => { window.open('https://github.com/denkxi/ai_summarizer', "_blank") }}
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Online Article Summarizer using <br className='max-md:hidden' />
        <span className='cyan_gradient'>OpenAI GPT-4</span>
      </h1>
      <h2 className='desc'>
        Make your reading easier with <span className='font-bold'>Shoto</span>, a free tool that shortens long articles into clear and brief summaries
      </h2>
    </header>
  )
}

export default Hero