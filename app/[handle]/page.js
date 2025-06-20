
import Link from "next/link"
import clientPromise from "@/lib/mongodb"
export default async function Page({ params }) {
    const handle = (await params).handle
    const client = await clientPromise;
    const db = client.db("bittree")
    const collection = db.collection("links")

    // If the handle is already claimed, you cannot create the bittree
    const item = await collection.findOne({ handle: handle })

    console.log(item)


     const item2 = {
  "_id": {
    "$oid": "684917971887fb6d37ea21a9"
  },
  "links": [
    {
      "link": "Facebook",
      "linktext": "https://www.facebook.com/"
    },
    {
      "link": "Instagram",
      "linktext": "https://www.instagram.com/accounts/login/?hl=en"
    },
    {
      "link": "Github",
      "linktext": "https://github.com/imsanjay86"
    }
  ],
  "pic": "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8QEA8ODRAPDw4NDw0PDw8NDxAQDg0PFhEWFxURFRYYHSggGBomGxUVIjEiJTUrLi4uFx8zRDMuNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIARMAtwMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAQIDBAUGBwj/xAA8EAACAgEBBgQDBQYEBwAAAAAAAQIDEQQFBhIhMUEHE1FhFCKBMkJicZEII1KCocEVJEOxFlNykqLh8P/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDbKPPBnaWhSaWDXyzxG22emsMDaV6OMVyLc+Rf80wNfqEk8AY+s1cE8Z5+hYr1OWYE63J5ZXDTsDdV25MhWGnqhJdGy7Kc8JLq8vPol1f/AN6gZ89Sl1LF2qXYxqqXLMn3bxn0Ly03Rde4Frz5su13z+her03qZENMBY82TIinnJmx0xPw4DT6txNhXr8o1roL9FAGX5zZk1rPUx6qzMrwurQFyFZTdSsdCuFq7EymmBqNTpc9jWz0uDoLMGHbADSWack2kqiAOdjonnJtdLRy6GdVQsF+vTgYFtWFyNTqNNJvmdNbSWfh0+wHP1aN+hkQ0fsbyGlXoX46X2A0cNJ7E/C4ab6c19GdBHSmk2vtFeatJQ0rZL57MJqmPr+bzyz6P0Aw9IsSnXLP7txxjpwtcvr1/Q2Ven6tc+XJrucztjVwoknK6qcoJR4Y2uuUorD6889+Xuaq/wAR9LpnznapxTcqLoKTly+7ZDl2+91A9Bq0/JP+Lo/7GTHSnBaDxe2VJZm7qmk5SjOvKTy88LT59eh0+7+/+zda+HT2LjWPlnKuuTT7pSknj+oG6WlJ+FM2GprbS4knL7Kl8rlyz8uev0L6jH259PcDUT0pTHTy7ckbh1Is32VwTlOUYRXVyaSX6gYUdKu+WVqCXRJfQxLN4tCnwfE1Sm+ldcvMsf8ALHLI/wAZ07+1Kda/iuqsrr/75LhX6gZEpMpdhclH+pbcAKHMJkuBS4AUTAlEAWaJ5NhVI1WnZn1gZEo5EayIl6KAQrMiNZTWjIQGFtPVV0VTuuko1VRlObbxyXY+cNdv/m7U6qPFx6m2XBFRwoVRgowy0+y58K7t5Zs/GDftau2zRUyn5Fdzrk454HGDw5LD+duXF7JRXfp5XJ+nTt6/UDc7Q3m1Frbi+DPV8pTf1fTt0NNZZKTzJuT9ZNtlIAAADK/xLUYjHzruGtqUI+bPhhJdHFZ5Myf+IddxRn8XquOEXGElfapQi1hpPPLkawAdls/xP21VOuT1ttkIOOa7eCSsinlxbazz6Z6mfvT4m2a2Xy0zoqxBKEL27Hz+ZuzGcvtjC9crkefADaazasZ2SnCiuqMnHCrnfxxivxSnmUufNvubvY+/eqpXAowshFcvMssjZjkmuJSXEu+Off3OQL9M1luUnGSjmMuf2lzS5c/qB7TuV4nVRtr02phKmuxqLTsrnTQ30nCax8jeMx7ZznqewRSksx5p800fLexNXVrNPPQaiMI6j5p6S/Cj8+MuqTXTL6fU9R8Ed65XVPQ6icnZS+GClz4VjMUvZ4ksdnFfxJIPUZQLcomXKJZlEDFlEF2cQBraazOqQrqMmFQCCL0IFUKiu6yNcJWTlGMK4ylKUmlGMUsttvogK4ROA8Vd/JbMrjXChzsuyoznLhglwPElhPi5rDTwbDa3iDoo6S7Vae+mfl4UZOXyTm8/Isc84T7M+aN594L9oaizU3yl+8k5KtzlKurl0gn0QGruscpSk+sm2/q8lAAAAAAAAAAAAAAABVCbTUotqUWmmuTTXRo7rwpV9muxRyl5cZz5J5lC2MlL6vK+rODOv8Lds/CbT0lrbw7Y0yjhfPC5qt/o3GX8rA+rOHKTLUqzKaKGgMOUAZEogC3CovxrK1EqSAhROU8TdDPU7M1dFTam6+JpPDcI/M/zXLodacrtnejZytloddZ8NbKLUPiU6oTUlj5Zvk+vr/cD5a0uq1HBbp428MZ8pUtry5vPSK6KWX2x16mty+n9Pc7HePTaCi+ymqyrVV1ZVTU23LHKMPNhyaxjGemGmzmLtn2qDvVc3RxcDthGUqIzfPy/M6Zx2yBiAAAAAAAAAAAAAAAAG43Q0krtoaGmH2rNVp0vZeYm3+iZpz07wA2Ir9pPUy6aCt2KPrOalBP6ZbA+k0illZSwLcgTIkCtEgADA21srTampw1enr1MIptQtrjPn+Hi6MzyQOL3d3S0FbsplsvSw4GnG2VMJu2t/Z5yy+JYafblnuebeO8tNpa6dnabghKd71U6ap24hFqfOVfF5ceKU2+S7du/p/iHv3ptkU8U8W6uyL+H06fzSf8AHP8Ahgn379F7fKu1NoXaq+3U6mbsuvnKyyb7t9l6Jckl2SSAxRgFSAoBIAEEgCASAIBJAAAAD2T9nWzF2qwufCk+uZZ5r9OCX6njZ7t+zjs+Tq1eofKHnRrX4pKv+yn/AFQHthDJIYFDAYAuAAASQSB8h+JcNWtq6349TVrvscOPo6OJ+U4fg4Usfl65OZPob9oja2mho6tJOqFmr1E1OqbiuLT1wknKcZY5Z+zj0b9D55AkkhEgUlXCILmXXFvku4FmKDX+5eVePT6dyiz0/UC2AAAAAgA6LcfdDU7V1MdPp041xw773FuvT1+r9ZPniPd+ybQZ3hjuVLa+rdUpSr01EVZqLIY4km8RhHP3pNP6RZ9SbD2RRoqK9LpIKumpYjFc233lJ923zbMbdbdrSbN060uihwQzxTlJ8Vl08JOc5d3y/JdkjbgCllRSwKZApkwBdRJSmVACSAB5Z+0FsOq7QV62dqqs0M3GCcXLz1a4ry1jo8xTz6JnzifWXixsKrW7K1cbXKL0ldutqlF4xbTVNpS9U05L657HyaAJRAAuQLqnjqv0LMWXYgHNvose5ChyLyiUXweAMUAAAAAPp/wI2fGrY1Nihwz1Vuotm31nixwi/wAuGCx/7PB/DzdG3authp4pqitxs1Vq/wBOnPNL8Uui/Xsz610mmrprrppioVVQjXXCKxGEIrCS+iAugACGUSZLZbnICicgWbJgDMiytGPXMvRYFYAA4/xeuthsTaDpTcnVCEsc8VTthGz/AMHI+Tj7b1mlrurspuip1XQnXZCXScJLEov6M+dd7fBfaFF05bPgtVpZSzXicVdXF/dnGWM49VnOPoB5cD0/ZfgdtW2MZ2z0unUusbJ2Ssj+ajHH9Tptn/s/wXPVbQlL8NFCjj+aUn/sB4Yi7B4Om8St2Kdla34TT6j4iPlQsfFjzaXLPyTxyzhJ/lJcvXkgMrz4r3/IpeoXoywAJbRHIEASz0HdTwk120dLRrabdPXVe5YVrnxxjGycJSwk8/Zyl3z2PPTqtz/EHaOzHGOmuc9MpZelu+elpvL4e8M8/s45sD6X3K3P0uyaPI0qblNqV11nOy6aXV+iXPCXTP5s6A57cfe7T7W0q1OnzCUXwXUyac6LMfZfqu6ff9UdCAKWyWy3KQETkY9kyqyZi2TAicgY9kwBm1WGVCZqq7DLrsAz0yvJjQmXoyArAQAk0u+W3o7O0Op1s8N0Vvy4vOLLpfLXDl2cms+2Wbic1FOUmlFLLbeEl6tnz549b6UayWn0GitjdTRKV19lT4q5Xc4wipLrwri6cvnXoB5TrdXZfZZffN2W3TlZZOX2pzk8tssAASCAAAAAAAeg+CW9C0G0o1WvGn16jp5vtG3i/dTf1bX87PqA+Hk8c1ya5prqmfVvhrvvRtLR0KV1a10K1C+hyStc48nYo9XF9eXrgDsJMsWTLlrMSyQFNkzFsmVWSMW2YFNswYtkwBlVWmXXYaai0z6bANpXMyq5muqkcxvp4kaLZadbfxGsx8umqkvkeOTtl9xe3N+wHeuaScpNKKTbbeEl6tnnm9fjHszR8UNNL4+9ZwtO15Cfbit6Nf8ATxHhW9u/W0dpyfxVzVGcx01OYaePTGY/efLrLLOZA6rfDxA2jtRtam1woz8umozChLtldZv3ln6HLEACQAAAAAAAAABBXTbKEozhKUJwacZQbjKLXRproygAeybheMtkXDTbYfmVvEY6yK/eQ9PNS+0vxLn+Z7LC+FkI2VSjOuyKlCcGpRnF9GmuqPjY6TdPfbXbNl/lrOKlvM9NbmVMvVpfdfvHH1A+nbWYlrOY3S8RdFtHFbfw2qfLyLZLE3j/AE59JflyfsdPYgMWbJIvfCsskDB09hl37QqorldfONdVazKc3hJf3fsaqF0YRlOyShCEXKcpPEYxSy232R4tv/vfPaF3BW5LR0tqqHNeY+jtkvV9vRfUDot8/Fq+/j0+zeLTUPMXf01Fq/D/AMtflz910PMpybbbbbbbbby231bIAAAAAAAJIAEggASCABIAAgAAAABKeOa6o9E3N8U9RpuGnX8Wq06wlZn/ADFS/N/bXs+fuedAD6K25vZo5aRamm6E6pOPzJ4cXlfLJPmn7MHzspPDWXh4ys8njoAPSPFnbU1KvQVyxBwjddj77cnwwfssZx7o82N1vnrvP1+rs7edKuPvCv5Iv6qKf1NKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAS33ZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB//2Q==\"",
  "desc": "This page is create by Sanjay .It contains lot of knowledge and links."
}


        return <div className="flex min-h-screen bg-purple-500 justify-center items-start py-10">

            <div className="photo  flex justify-center flex-col items-center">
                <img src={item.pic} alt=""  />
                <span className="font-bold text-xl">@{item.handle}</span>

                <div className="links">
                    {item.links.map((item, index) => {
                        return <Link  key={index} href= {item.link}><div className="bg-purple-100 py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3">
                           {item.linktext}


                        </div></Link>
                    })}

                </div>
            </div>


        </div>
    }






    
