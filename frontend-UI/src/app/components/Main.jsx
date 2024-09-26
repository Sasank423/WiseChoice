'use client';
import React, { useState, useEffect,useContext } from 'react';
import GaugeMeter from './GuageMeter';
import { HiThumbUp } from 'react-icons/hi';
import { GoDotFill } from 'react-icons/go';
import { HiHandThumbDown } from 'react-icons/hi2';
import { UtilityCons } from '../providers/utilityprovider';
import Link from 'next/link';

const DATA = [
  {
    context:
      "This is absolutely the best time to buy this product. Don't miss out, Drop chances are lower than 15%",
    fairness: 65.22011468488212,
    url: 'https://pricehistoryapp.com/embed/apple-iphone-15-pro-max-256-gb-black-titanium',
  },
  {
    counts: [45, 26, 9],
    data: [
      {
        rating: 'Positive',
        review:
          "The iPhone 15 Pro Max is a powerhouse device, offering top-tier performance, an exceptional camera setup, and a gorgeous display. Its sleek design and long battery life ensure it's ready for anything. While it's pricey, the overall experience justifies the investment for tech enthusiasts and professionals alike.",
      },
      {
        rating: 'Positive',
        review:
          'The iPhone 15 Pro Max is a very versatile phone with professional cameras having 4 options of optical lenses of 0.5x, 1x, 2x and 5x and a macro lens option. It is better and more cost effective than having an SLR camera with many lens options, which you need to acquire. The charge lasts long enough for my filming videos of YouTube channel. Superb',
      },
      {
        rating: 'Positive',
        review: 'Nice',
      },
      {
        rating: 'Positive',
        review:
          'No regrets. It is as if I bought from a showroom only which got delivered at home.',
      },
      {
        rating: 'Negative',
        review:
          "Recently, I updated to the latest version of 17.5.1 added emojis something like that and after that my device touch screen isn't responding now. And when I used the phone earlier, the device gets too warm easily when I started to play games...and I contacted the Amazon and iOS support and told me to visit the service centre and the service centre is like 1-2 days far from my home location. This isn't something I expected. The phone is very expensive and I bought recently, just in 1-2 months the device isn't usable, it need to be trash now smh...The device isn't even charging now..",
      },
      {
        rating: 'Positive',
        review: 'Excellent device at any expects.',
      },
      {
        rating: 'Neutral',
        review:
          "I recently upgraded to the Apple 15 Pro Max, and while the enhanced camera is undoubtedly impressive, but I feel that it falls short of delivering a truly groundbreaking experience. If you're already using the 13 pro or 14 Pro, there seems to be little incentive to make the leap.\n\nThe camera improvements are noteworthy, capturing detail and clarity like never before. However, beyond this feature, the 15 Pro Max doesn't offer a significant leap in terms of innovation. Personally, I find the Pro versions more manageable in hand, and the Max variant, although boasting a larger screen, can be a bit unwieldy.\n\nIn essence, the 15 Pro Max is a solid device with a stellar camera, but for those already enjoying the perks of the previous Pro models, the upgrade might not feel as compelling.",
      },
      {
        rating: 'Neutral',
        review: 'Ok',
      },
      {
        rating: 'Negative',
        review:
          "Heating Issue during Charging & Required AC room for Charging otherwise charging will stop due to mobile heating / high temperature which is a major issue in Apple iPhone 15 Pro Max.\n\nI suggest avoiding it, especially in the summer, if you don't have an AC room.\n\nThis is my personal experience!!",
      },
      {
        rating: 'Positive',
        review:
          'The battery is little problem need to charge once in a day. But other then that all good picture quality is epic attached moon pic for example',
      },
      {
        rating: 'Positive',
        review: 'Good Product but Price Was High and I Trust amazon Thank you',
      },
      {
        rating: 'Positive',
        review:
          'Just amazing product. Actually I like to purchase online products but as it\'s so expensive, I tried to purchase from local store in Barasat but they told me 8 thousand more than online price (Only phone\'s price)😀 even without charger, screen protector and back cover.\n\nI got it on online with everything only ₹1,52,000. Although it was a little difficult to buy, as you know it is not easy to transfer the higher amounts within short time. 😀\n\nHowever, Thanks to Amazon team and specially thanks to my IDOL "Steve Jobs" 🙏🤗',
      },
      {
        rating: 'Positive',
        review:
          'I think there is no need to justify that this is the best phone on the planet. In every aspect this is best.',
      },
      {
        rating: 'Negative',
        review:
          'Camera setting not available, so photos not better than Samsung m34, likely Caller tune should not set, call record not available. Should not connect to laptop. Download space not available',
      },
      {
        rating: 'Negative',
        review:
          "Packing is bad. There's a tampered package within a new package. The tampered package contained the phone. But the phone is looking good",
      },
      {
        rating: 'Positive',
        review:
          "As I was aware that what I need and what I was paying for, I needed a quality mobile with best hardware and software combination.\nI need the OS to be clean without any bloatware which I got.\nI don't play games. For moderate use of Social media, whatsapp, youtube, audible (audio books), music while exercising, Battery life is around 2 days or sometimes more than 2 days. If you are a gamer or use mobile a lot you might need to charge your mobile everyday.\nCamera is good. So far the pictures I took the quality is good.\nNot explore the processor's capacity yet but Never hanged or never will for me (not a heavy user so won't be a problem).",
      },
      {
        rating: 'Positive',
        review:
          'A phone that screams that you are doing very well for yourself. Don’t get me wrong, it works extremely well and I am completely satisfied with it. but, it is way too expensive for a phone. I have a pixel 8 which as a secondary phone which costs way less and I am satisfied with that as well. Nevertheless, nothing can replace an iPhone for me due to personal preferences',
      },
      {
        rating: 'Positive',
        review:
          'I would prefer this over S24 ultra. Used both phones and impressed by this phone. Yes I agree s24 ultra had few more features but in terms of quality 15 pro max wins. And camera quality is far better than s24ultra. But it differs on a customer’s choice.',
      },
      {
        rating: 'Positive',
        review:
          'Mind blowing Speed. No heating issues. Awesome camera for videos and photography (astro).',
      },
      {
        rating: 'Positive',
        review:
          'The phone is really good it had some overheating issue as heard but not faced any it was due to software update now it is all fixed I still did not had any issue regarding overheating. The phone is really fast and the battery life is awesome. The new action button is really handy and useful. The camera is the best camera an iPhone ever had the photos are stunning and spectacular…. I am satisfied with the phone..',
      },
      {
        rating: 'Positive',
        review: 'Play Video\nPhone is just amazing and',
      },
      {
        rating: 'Positive',
        review:
          'It’s a fantastic phone…the feel and comfort in hand is awesome…looks stunning…also the brand appeal of Apple is fabulous. Camera is the best, performance is over the top…really fast and the games you can play are of play station’s…can any other phone do that…also the video quality is very nice…',
      },
      {
        rating: 'Positive',
        review:
          'Wow, such a great phone, superfast, great performance, great cameras great looks I’m in love with my black titanium so strong so light so pro',
      },
      {
        rating: 'Positive',
        review:
          'I recently switched from android to iphone. So i am liking the good audio quality, camera and everything.',
      },
      {
        rating: 'Negative',
        review:
          '"I spent 152,000 rupees on an iPhone 15 Pro Max, but it doesn\'t seem worth more than a 10,000 rupee phone. I\'ve encountered software issues, with many apps and games not performing well. There are problems with phone calls—calls drop frequently, requiring me to restart the phone each time. Initially, I thought it might be due to other apps or network providers, but I used to use an Android phone with the same network and common apps, and they performed much better. This iPhone keeps crashing apps and games, which, in my opinion, makes it not worth the price."',
      },
      {
        rating: 'Negative',
        review:
          'Ultimate performance but some bug issue in 17.2.1 update and FB is not functioning properly….😏😏😏😏😏Lot of BUG issues are experienced in this phone and needs to correct it.',
      },
      {
        rating: 'Negative',
        review: 'Fake product , paid 1,89,400/-\ngot 0 refund',
      },
      {
        rating: 'Positive',
        review:
          'It’s a great buy. I upgraded from XS Max and am so glad I decided to get this. It’s pricey but worth it. Very powerful battery too',
      },
      {
        rating: 'Positive',
        review:
          'It’s around 2months I have been using this device and it has been working flawlessly. No heating issues or such. Totally worth the upgrade because of the camera.',
      },
      {
        rating: 'Positive',
        review:
          'We have received the iPhone 15 Pro Max, natural titanium color, and 256 GB storage capacity. The phone is good-looking and fast. It gets charged with the Apple 20W USB-C Power Adapter (purchased separately). It also charges well using my 3-year-old Mi wireless charger (Qi charging). Overall, we are happy with the iPhone.',
      },
      {
        rating: 'Negative',
        review: 'Phone battery down very fast',
      },
      {
        rating: 'Positive',
        review: 'Good',
      },
      {
        rating: 'Positive',
        review:
          'This is my 1 st pro iPhone. And so far I’m really impressed with the performance and simplicity of the product.',
      },
      {
        rating: 'Positive',
        review:
          "I have purchased natural titanium and it's really awesome. My first phone purchased with my hardwork. Didn't sold my kidney for it 😂😂",
      },
      {
        rating: 'Positive',
        review:
          'No heating issue till now running well with the new software update I have installed lots of apps and the ph is running well',
      },
      {
        rating: 'Neutral',
        review: 'Lightning fast,titanium tantrums',
      },
      {
        rating: 'Negative',
        review:
          'Really disappointing to see that being a premium phone it’s heating issue is just in another level',
      },
      {
        rating: 'Positive',
        review: 'Superb',
      },
      {
        rating: 'Neutral',
        review: 'Fast charging',
      },
      {
        rating: 'Neutral',
        review:
          'I only use i phone pro maxs and when new model come i gift my old one to my subscriber please apple make i phone 16luli max lulliniam',
      },
      {
        rating: 'Negative',
        review:
          'My biggest mistake buying this, you can to same things in 15 and 14 and 13',
      },
      {
        rating: 'Negative',
        review:
          'iphone 15pro max ios worst pro max I purchased. I already have 13 and 14 pro max, Time to switch to Samsung. The screeenshot you see shows 85% baterrey charge but it has been only 5 min after i made a full charge of the phone',
      },
      {
        rating: 'Negative',
        review:
          'Good mobile but Too much price. Features are ok but price are extra ordinary. Not value for money. Avoid if you have not enough money',
      },
      {
        rating: 'Positive',
        review:
          'All good... Not a compare anything 😍\nRate 💯 to 💯 😍\nRecommend to everyone perches 😍😍😍 Nice 💯😍😍 Thanks',
      },
      {
        rating: 'Positive',
        review:
          'Best IPhone Ever And I Loved This Phone so much 😍😍😘😘.\nPros - Best Battery Life , Value for Money Phone, Very Smooth Display ever, very Smooth in Touch, Best Camera ever.\nI changed my phone from IPhone 12 to IPhone 15 Pro Max .\nI Loved This Phone',
      },
      {
        rating: 'Negative',
        review:
          'Battery life is quite bad , honestly the battery life should be a bit better I this range of price.',
      },
      {
        rating: 'Negative',
        review:
          "The box had a different colour. I order black Titanium....box was black Titanium but phone was natural titanium inside ...It's heart wrenching...Trust shaken...\n\nThe phone looks used\n\nIt can happen with Apple product also...it's a shock.",
      },
      {
        rating: 'Negative',
        review:
          "Play Video\nDidn't use a screen guard for a week and found a scratch on the screen. What a stupid phone. 160k phone and you will get a scratch without even holding the phone. Better get a screen guard the day you receive the phone.",
      },
      {
        rating: 'Positive',
        review:
          'It is good for gaming and personal usage and it is more better than 14 series, the camera clarity is super.',
      },
      {
        rating: 'Negative',
        review:
          'this is very bad iphone it lacks kanye west it is travis scott and has a jawline it is very ewwwwwwwww we cannot play cricket wws💀💀💀💀',
      },
    ],
    score: 27.14554058387876,
    props: [
      'Compiled in 485ms (2000 modules)',
      'Compiled in 485ms (2000 modules)',
      'Compiled in 485ms (2000 modules)',
      'Compiled in 485ms (2000 modules)',
      'Compiled in 485ms (2000 modules)',
    ],
    cons: [
      'Compiled in 485ms (2000 modules)',
      'Compiled in 485ms (2000 modules)',
      'Compiled in 485ms (2000 modules)',
      'Compiled in 485ms (2000 modules)',
      'Compiled in 485ms (2000 modules)',
    ],
  },
];

const Main = () => {
  // const {moreInfo,setMoreInfo} = useContext(UtilityCons);
  const {moreInfo,setMoreInfo,data, setData} = useContext(UtilityCons);
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState(null);
  
  const handleAnalyze = async () => {
    try {
      setIsLoading(true);
        const res = await fetch('http://127.0.0.1:5000/analysis', {
          method: 'POST',
          body: JSON.stringify({ prompt: query }),
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const response = await res.json();
        setData(response)
        console.log(response);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <>
    {
      !moreInfo && <div className="w-full p-4">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleAnalyze();
        }}
        className="flex gap-2 items-center justify-center"
      >
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          placeholder="Enter the Url of the Product"
          className="p-2 border-[1px] rounded-lg shadow-lg focus:border-brand outline-none max-w-4xl w-full"
        />
        <button
          type="submit"
          className="bg-white rounded-lg transition-all shadow-lg p-2"
        >
          Analyze
        </button>
      </form>

      {isLoading ? (
        <div className="flex justify-center items-center">
          <video src="/wisechoice_loading.mp4" loop autoPlay muted></video>
          <div className="absolute top-3/5 flex font-medium">Analyzing</div>
        </div>
      ) : (
        data && (<div className="p-8 h-full w-full grid grid-rows-2 gap-4 ">
          <div className="grid grid_r1 gap-4 ">
            <div className="p-4 h-full  flex flex-col gap-1 items-center justify-center bg-white shadow-md rounded-lg outborder">
              <h1 className="font-bold text-4xl  text-brand">{data[3].grade}</h1>
              <p>Product Grade</p>
              <p className="border-t-[1px] pt-2 text-gray-500 text-sm">
                {data[0].context}
              </p>
            </div>
            <div className="bg-white  flex flex-col gap-4 justify-center items-center shadow-md w-full h-full rounded-lg">
              <h1 className="pb-2  text-2xl font-bold border-b-[1px] flex gap-4 items-center">
                <HiThumbUp className="text-brand" size={25} />
                Pros
              </h1>
              <div className="flex flex-col gap-2 text-sm max-h-[10rem] overflow-y-scroll">
              {data[2].pros.map((item, index) => (
                  <p key={index} className="flex gap-2 items-center max-w-[30ch]">
                    <GoDotFill size={10} />
                    {item.split('-').slice(-1)}
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-white  flex flex-col gap-4 justify-center items-center shadow-md w-full h-full rounded-lg">
              <h1 className="pb-2 text-2xl font-bold border-b-[1px] flex gap-4 items-center">
                <HiHandThumbDown className="text-red-500" size={25} />
                Cons
              </h1>
              <div className="flex flex-col gap-2 text-sm max-h-[10rem] overflow-y-scroll">
                {data[2].cons.map((item, index) => (
                  <p key={index} className="flex gap-2 items-center max-w-[30ch]">
                    <GoDotFill size={10} />
                    {item.split('-').slice(-1)}
                  </p>
                ))}
              </div>
            </div>
          </div>
          {/* <div className="p-4 flex flex-col gap-1 items-center bg-white shadow-lg h-fit rounded-lg outborder"> */}

          <div className="grid grid-cols-3 gap-4">
            <GaugeMeter label="Overall Score" value={Number.parseInt(`${data[3].total_score}`) } />
            <GaugeMeter label="Goodness Score" value={Number.parseInt(`${data[1].score}`) } />
            <GaugeMeter label="Fairness Score" value={Number.parseInt(`${data[0].fairness}`)} />
          </div>
          {/* </div> */}
          <div className="absolute bottom-4 flex gap-4">
            <button onClick={() => setMoreInfo(true)} className=' px-3 py-2 bg-brand rounded-lg text-white'>Show More Info</button>
            {/* {
              data[4] !== undefined && <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-brand text-white">
                Similar Product Found at low price. <Link href={data[4].link} >Click Here</Link>
              </div>
            } */}
          </div>
        </div>
        )
      )}
    </div>
    }
    </>
  );
};

export default Main;

// --chart-1: 276 43% 23%;
// --chart-2: 330 59% 54%;
// --chart-3: 199 97% 14%;
// --chart-4: 48 100% 51%;
// --chart-5: 30 100% 49%;
