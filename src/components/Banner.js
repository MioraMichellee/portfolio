import { useState , useEffect , useCallback} from "react";
import { Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import mercury from "../assets/img/mercury.png"
import saturne from "../assets/img/saturne.png"
import headerImg from "../assets/img/mi-astronaute.png"


export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Web Developer", "Mobile Developer" ,"Software Developer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState('');
    const period = 2000;

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [isDeleting, loopNum, text, toRotate, period]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker); };
    }, [text, delta, tick]);

    return(
        <section className="banner" id="home">
            <img src={mercury} className="absolute mercury-img" alt="mercury"/>
            <div className="rotate">
            <img src={saturne} className="absolute saturne-img" alt="absolute"/>
            </div>
            
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{"Hi I'm a MioraMichelle "} <span className="warp">{text}</span></h1>
                        <p>Embark on a journey through my creations and technical explorations. Just as astronauts explore the vast unknown of space, I delve into the infinite possibilities of coding. As a third-year student at ENI Fianarantsoa, I am passionate about innovation. My journey is marked by various projects, each providing a valuable opportunity to learn and perfect my skills.</p>
                        <button onClick={()=>console.log('CONNECT')}>Let's connect<ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="headerImg"/>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}