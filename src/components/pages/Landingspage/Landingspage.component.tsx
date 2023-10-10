import {
	Header
} from "../../layout/index";
import {
	Searchbar, Card
} from "../../ui/index";
import style from "./Landingpage.module.scss";

const Landingpage = ()=>{
  /*  const arr_images = [
        ["Mv9hjnEUHR4","white"],
        ["Pg6dgmTaqtM","white"],
        ["kZ8dyUT0h30","white"],
        ["IY9bfJAM2zM","white"],
        ["L-2p8fapOA8","white"],
        ["O0T1SIgHAfM","white"],
        ["VLaKsTkmVhk","white"],
        ["SYTO3xs06fU","white"],
        ["aOC7TSLb1o8","white"],
        ["mqoLpeeYBic","white"],
        ["_oKSYD2cSIk","white"],
        ["YRicljDVF38","black"],
    ];*/
    const arr_images = [
      
        ["VLaKsTkmVhk","white"],
        ["O0T1SIgHAfM","white"],
        ["Mv9hjnEUHR4","white"],
        ["Pg6dgmTaqtM","white"],
        ["WM2frq8vnG8","white"],
        ["hHDMQqP4jPU","white"],
        ["Lu9z9qS8I_Q","white"],
       
    ];
    const random = Math.floor(Math.random() * arr_images.length);

    const styleImage={backgroundImage:"url(https://source.unsplash.com/" + arr_images[random][0] + "/)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center"};
    const styleSlogan={color:"" + arr_images[random][1] + ""}

    return (<div><Header />
    <div className={style.banner_wrapper} style={styleImage}>
        <div className={style.search_wrapper}>
            <h2 className={style.search_title} style={styleSlogan}>Zoeken naar studievoer?</h2>
            <Searchbar />
        </div>
    </div>
    <h2>Nieuwste lespakketten:</h2>
    <div className={style.flex_wrapper}>
    <Card className={style.latest_upload} /><Card className={style.latest_upload} />
    <Card className={style.latest_upload} /><Card className={style.latest_upload} />
    </div>
    </div>);
}

export default Landingpage;