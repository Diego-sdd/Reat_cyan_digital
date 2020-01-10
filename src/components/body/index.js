import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../body/styles.css';
import { Row, Container, Col, Image, Button, Carousel, Card } from 'react-bootstrap';

import icon1 from '../body/image/programacao.png';
import icon2 from '../body/image/designgrafico.png';
import icon3 from '../body/image/webdesign.png';

import tipmart from '../body/image/tipmart.png';
import openheart from '../body/image/openheart.png';
import ac from '../body/image/agilecards.png';
import panfleto1 from '../body/image/panfleto.png';
import panfleto2 from '../body/image/panfleto2.png';
import logotipmart from '../body/image/tipmartlogo.png';


const BodyContent = () => (
    <body>
        <Container fluid={true} style={{color: "black"}}>

            <Row>
                <Col xs lg="12" className="content_products">
                    <Col xs lg="12">
                        <h4 id="title_content_products">Principais Soluções</h4>
                    </Col>
                    <Row>
                        <Col xs lg="4">
                            <div className="solutions_icons">
                            <Image src={icon1}></Image>
                                <h4 className="subtitle">PROGRAMAÇÃO</h4>
                                <p>Desenvolvemos sites, blogs, portfólios e outros sistemas web com o objetivo de proporcionar uma ótima solução ao cliente!</p>
                            </div>
                        </Col>
                        <Col xs lg="4">
                            <div className="solutions_icons">
                            <Image src={icon2}></Image>
                                <h4 className="subtitle">DESIGN GRÁFICO</h4>
                                <p>Criamos logos, banners, panfletos e outros modelos de design com o objetivo de proporcionar uma ótima solução ao cliente!</p>
                            </div>
                        </Col>
                        <Col xs lg="4">
                            <div className="solutions_icons">
                            <Image src={icon3}></Image>
                                <h4 className="subtitle">WEB DESIGNER</h4>
                                <p>Analisamos e reparamos interfaces, cores, layouts e outros componentes com o objetivo de proporcioanr uma ótima solução de UX e UI ao cliente!</p>
                            </div>
                        </Col>
                    </Row>

                </Col>
            </Row>




            <Row>
                <ul className="gallery_box">

                    <li>
                        <a href="#0"><img src={tipmart}></img>
                            <div className="box_data">
                                <span className="boxtitle">TIPMART</span>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href="#0"><img src={openheart}></img>
                            <div className="box_data">
                                <span className="boxtitle">OPEN HEART</span>
                            </div>
                        </a>
                    </li>


                    <li>
                        <a href="#0"><img src={ac}></img>
                            <div className="box_data">
                                <span className="boxtitle">LOGO AGILE CARDS</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#0"><img src={panfleto1}></img>
                            <div className="box_data">
                                <span className="boxtitle">PANFLETO S.I.</span>
                            </div>
                        </a>
                    </li>


                    <li>
                        <a href="#0"><img src={panfleto2}></img>
                            <div className="box_data">
                                <span className="boxtitle">PANFLETO N&N REPAROS</span>
                            </div>
                        </a>
                    </li>

                    <li>
                        <a href="#0"><img src={logotipmart}></img>
                            <div className="box_data">
                                <span className="boxtitle">LOGO TIPMART</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </Row>




            <Row>
                <Col xs lg="12">
                    <h3 className="text-center title_depoimento">Depoimentos</h3>
                    <Carousel interval={10000}>
                        <Carousel.Item>
                            <Row>
                                <Col xs lg="2">

                                </Col>
                                <Col xs lg="3">

                                    <Col xs={12} md={12}>
                                        <Image className="d-block w-10" src="data:image/jpeg;base64,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" roundedCircle />
                                    </Col>

                                    <h3>First </h3>
                                    <p>Nulla vitae elit libero, </p>

                                </Col>
                                <Col xs lg="2">

                                </Col>
                                <Col xs lg="3">

                                    <Col xs={12} md={12}>
                                        <Image className="d-block w-10" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhUTEhIVFRUXFRUVFRUXFxUVFRYVFhUXFhUVFRUYHSggGBolHxUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKBQUFDgUFDisZExkrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrKysrK//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAAIHAQj/xABDEAABAgQDBQUFBgMHBAMAAAABAAIDBBEhBRIxBkFRYXETIoGRoTKxwdHwBxRCUnLhI2LxFSQzgrKzwlOitNI0c5L/xAAUAQEAAAAAAAAAAAAAAAAAAAAA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8ApXZ3RUJRRNVLDQTtcsLlqWr0tQDxSpWtso3tRkJlkCyZaoqoyeYgCEGOK2hOUDyvAUDJjwtnxAl+damKUEkcr2G1DOdVEQSgyK0ICKUZMlAkIIivGBEQ4alEugyDMEIsTCXvh0K97SnNA1Y+pW8WFUJfLTQr3rI2JiUMDeegQCmFRHSsJL34sz8h9ApIW0EMasd4EIHJhCiCmJcLaDjMF9Bny/qt6pg6A1wqCCORqECVjaFFKZ0sKqOKyiAaK0LaoogpiMoocwSg2nSKrMPddRTLaqOTddA5IXijBKxAW9t1PLtWrmreGgIyLCFjFs5qASIp4brKN7FLCZZALNIB6ZzbLJVFQQOCxrVuG1REOAghLEPGNE2EKgS+el0AbYqaSoFEkbCNU8koZogimWqCDBqiJxq1hRA0VKCQS4Q8zPNaLXQeI4mTYW4D5pc0EmpN/wClvUoCpmdJ0A0+vcVAYjuP13v2XpFvD5/ssAH11HzQR3/MfP8ASF6HH8x48d5+AXtOf13Vjhz4+HtINhGdvofoD5rUta7+U+nH4rxzfrxK1p7/AJX9EEcaCW33KaQxGJCNWOpxG49QtWRCOYpofD5rV8EHvN8RwQW+Tn+1AcB15FezsXiKIn7OJQPhxCdz6f8AaE9xrC2lhoLoOfTBqV7LwSmkPBnm9EdhuFkmlECKYh2UErYq44jgfcNlUjBLXEIDO0WITOV6gspYvRDUphrwFBJCYpCxRtepg7kggfCW8OHZbOdyUsMW0KACch2SmPBVjjwiRolk1BsgVMaj4EOoUDYabSUMUQCPhlYyQzapm9gU8rRAmdhYF6LxzAAnM49tFW5yPeyCOYuUoxaNlN9wFBxJTWA2pSHEYnaRSfwtsPDUoBWNJqXa391Pj6Ld0Sm/j01P7LSLGpYfV9/1vQUSLVAVEmOHE/XoFA6Z5/X0Am2CbJTEzQhuVp/E74LoWD/ZlLgAxHF54aXQck+8LPvBXeYf2eSf/Tp1qoouwEnSmS/VBw9k4frx+ambMA/X1wXSMU+ziEa9nmB3WJCoWN7NxpY3BLeNCgg5jr9eS0Di248Rxug4cYhFsiB3X90F32FxIQ2vaN5DvSnwVnmMSa6y5hgk12cVvAmnnZXuWg1ugcQ4NQo4FGxFE+K5rbJcIpzVQWqYoWnoqFiMAF7uqsj5o5Uhj+0UCz7ssTEMWILRIyWZMHYIOC0wKMBSqs3biiCrtwuh9lFQ8Lr+FNXRb6KRkU8ECf8AsnkiJbCRwTEuJUkFxQBxcJaBoqnj8jl0V7jxbKn4/EqUFNEM1TGVqAvHkVU0OIAg1jVW0tDdvWziioLUGkaWqEqiyAqncZ9AlkeIRuQL8WpBgOdvPdb1P0T4KlxX5RQa6lWDaeczFjNzQXnqbD4+aqUeJUoNHvVw2K2ZzkRYrbatafeUj2awwx4oqO4DU8Oi7NIwGtAAFAEBskwABth04JpDgO/CcqDlYRB+fyTeXYTq4Dw+ZQSQwfxXWZBWwAUn3f8AmJ8loYbQRqT1KCN0G9UmxrDmvBzAEUunxY3XL5BBTTGG1N31VBwrbHZcwCYkMd3UjgqpDfRfQWK4W14NRYggnd5Liu1eCmVjEU7jrtO7ogGDqgEaj38V0XA5sRITXcvUWI81zKUi0PIq77Ax2l74Dt4zs8LOA9D5oLLGdXuhSSeEkmpTeDKNFLJnLsCCvTMmQCKKqzVQ42XSJ+lCqXPS/fQKg9Yj/uy8QOMOqCrRKAlVeSdcK24dEFEBUOXUol1LDjBSCMEEAgKRsFbGMFCZoBB7MwbKibUiiu0ebsqjj1HoKJHiuqiZSMd6PfJBew4ACCWUBOqbS8OyAguojWR7IPI8FCxpUlEvjE6LzOUHN9rDlivHDKPClfiq5Qk9U62uj5piIP5vcKIPAYGeM0HQGvX618EF/wBjMJEOBU+0S0+YNR6eq6Hh8t3R7yq/Ly+RjQBYX4apo7FLZW0BDbmtAPFA57NotmvzPyXrRrliC24qkzuIGKD2UV2YHVjHOBp+YtFClMxjs4xwaSypsC6Gb8quBCDp8Gfo6jnV8qL2YxNoNuHqucyGITJf3xU7qUF/crTDwF7xniRCDTRug611Qbzm0Za/JcCtKmzT4rSLtPLwxQxGZ+AzO8bBVzF5ZrnO7R9WMGrda8NdUjgTkCA4GIQyp7rQA+J1cXd1v1dBfYGOGI4HLmZT8LS00O6jlX9vZFkxLvLW0c0FzRaoI6JczHYcXvQ5mNDdWgMQM7MngaCibYZNiYhuJu5tWv3iugcCNRzQcWaaJ3g08YUWFFH4Htr+k2dXwJW22GEGBFzAdx9x1SmUdqOIQd5M2KVF0J/aRrZLNm4xiSsFx1yAHwt8FLGFCgbGbJCSTUXvLczNAg4j8xQbl68UglivUEkF9LptAxMNCURGoKK4oLYMcCw48FUWuW7BVBaYmP8ANLZjHjuKChwFHFlxVAwhYq9yhjOc65W8iGiyNcWoFRaeC17I8EzMRq8McIAGw3cFK2A5TPm15Cmi7RBsyVctxKFRRp3LqVC7EhxQcjxmJmjRDxe73lOtk5KpY4XLnE8wG2Vem/bd+o+9dF+zEw3ZrHMAaN0A0J9xKC4wWmgANLNpU0rxHu9VX9pi4AMIOWuaIGgkkbm1A38uCtABc/LahGljWlb0IIGtyeSnbgrCah3e3VGnQMA80FAjx517G/d2ljagdm2jTl3VNUxw7BJownmYcA4uo2E8tf3aX71SRfinkzs7GJORsP1Hm2tuiKk9n3ihjxBb8DBTzcfkgV4ZKvYcsQHdkINajf3qVpzKvMtAb2fsg9an3pS6QqRlFKGw6p7KMOSnvQVLFMHbEfUd2n5QKk3qqxMyUsKNiQalrqgvD9+8lpqRyJXRpiCASXbr14BSSrmPuHA35IKPIYdCeMsOFmH5IcMsZ1c93zTdmzba582Q0o5rRQZdMpIvRWnLXUBBTMFo03879QgpO1+CiPBcO7b2S01pTTcuNgFjyDYgkHqDQrvGKhsJjybC73Hkbk8tD4rhmLTDYkeI9go1z3OA33KDr2x0D+6Qq/lqPEkoufhUQuyEb+5wK/8ATai8SjAhAgmItEPLxu8F7OuSrtaOQXNsQUWJJDmjQXWIGsUpdHN0REiqANrcoPILKogmi1ZTfohZ+Z3BBM6fA3oWPiY3JRFde5XjGckDSFiZWRMZI4oEuol01GJNkDgYu4lEwpl7qJFKMJTuQh94IGb4Lqap5h+GdxvRLmjQcSArbKssgp21EvkDb3JVcrzKsm2cSsRreA9/9FWiUFNxuBkjO4E5h0P0VZvs6n+xiAkWe7ITwFCa+Yb6oXHpPtG1b7TdOY3ha7KtzQ3soc7XhzeRpoeVig6rAjjMcpu4m/BvCvK/knci+oqLDcN/7qo4HFLiLbqHkNT6iifwZvLXNaht5a9dUFolyAACan1SnH8UhQQakZ3d0U15e9BRsVytzE6A3SqLhvbB0WJ7RHdH5Ru8UDVkoYQEUvLi4jNU1FDwG5PJScaRWtFzib2miQm9lEhvNBSoFQaaGqXQdsDShDh1BHlSqDqUWbDnjSlaedlVtqoT5eIHypqNXw91t44KvQ8Zm41Pu7P8zgQPLU+itWEYdHyl0c53u1oKAcqINMH2pEQUdUO0IOoKZmbzEGvh9fVlVdoMHc15ewZXD15HiFrhmIOLe9UEagoJ9vItJOOR+Sn/AOiB8VxBrSSANTYLtu1UOsrFLiKGDcGwBBBqFy7AcKdmEV4oBdoO88eiC9YZHEOGxg/C0DyCJfM5kgEQhTwY6CecSR57ybRn2SuIy6A5hsvVC11liB4G7yoosYBeTMyAFX53ECTQIGExP1NAhIkwTYeJQcN9bBENaAg9YFuYlFo54CCmphBtMzaGguqUE99SiZY0QPZUJrhouUllYic4eaIHcmKxGjn7lcYIo1UnColYo6FWLEcfgS7KxIrRyF3HwCCmbWTFY7+VB6KuvmFDjeOdpEe5jTQuJBNrbrJDMTLzq6nIIHsWba32nAeN/JR4RjkKFMNfQ0d3HnQZTvI301VZctUHdJKG2E+rTVpaSDurUUPqho007tHfVlz/AGDxV7ZljHvcWOa5jWkkgGxbThouiR4IzB25woeu5ANDj9rFazcKHLXU7vDU+AVuhyBLQXPHDLbU8Dw3qvT+G5W9qwVLS2o3kDQg8iq7isefNMkXK0agjWtaEkdaIOjzuHQGg9o5twaEkagCxrYEpRHw6SLMwcwkcLmpFRUfWqqMnJTsZv8AFOamhBrWpvrpYphA2ZiV7oiCtdXNFOtK68kFllcYlZc0yktNtKNGlDz/AGQ+KfaDCg0DctBmNa3cQXFtAPBQSWyz+7na1uhJJLyTS4vZEDZiA3Roc7TMaWuT0QC4Z9oMGZoyNCymgu5pa3rcdE2OHwyA5oy0JA31BOah6ErxuEwQ32GndUgIaHEEKCGczbqUCba/EWQoJdEbnbmDcvHvA1FeFKqqw8UgRfYfT+U2Kn+0idH8OGdKkno0U+IVCjytLt09Qgu74a0AVPlMWiw9HEjgbhO5TaNjrRG5TxFwgeMUT4dSt5ciIKtII5I2DLoAxCWJoJdYgrE9PFxoEAVC16x0dASyNRY+dS6JGQr4hKBm+dQsSPVChbBqAmEUSEHDBRDQ7gUBsKZonEpPtazM4qtCC6uhXsZrq0NqIGk3jcR3sHIOROYpTEi1NTUneTdeNKjjO6IIor6oZ5UryoSg0Klgwq3OnvW8CBXXRbR30sEGkNxDswsW3B4EaLreB4kJmC29CWg63B306EFcoy0YOd0fs9jJgOyn2Sajkfkg69hE+Q4womtKcjwIUz4OUCoq38J4fylJYEy2KGvB7zaGm+wuCn+GTTYjS0+IQQQJhjbAlutvf4JnDxbKLVd5IWawgE1H9P2Ukph5bao8/wBkG39sPdWrTTz/AGUYjPiEClByKZw5QDUjoBVTsYwfWqAaDWmnJo+JSGdpmJ/C3XrwT7Ep9jG2NOiok/iJiAtb7NTU8UHN9o8U+8R3P/CO639IOqjlIlRQ6IbEYWWI4cyR0W8kUHszLcNfeg6JxGFW14b0BFhVuEGsnOPhOzQ3EH08Qrngm1jH0ZGAY7834T14KikLEHZGsqKggg6EaLFySFPRGgAPcANAHEDyWIHAw53ArduDuO5XiHJNRMOTbwQURmAOO5EQ9muSvbJVvBEMlxwCCkQtmeSLh7NDgrk2COSlbDCCoM2bbwU7Nnm8Fb4cEFSiWCCow8AbwSXbDB2MYIjT3hZ7aGgadD/RdMZKhVXbaXyZX0q1wLHcwg5cWqOK2qLnJfK6mo1aeIQhQROh0XsOBmI963d6qSJ3RTxKDWK4AU8qFBFtSpiKrRvtDqgLjst6IOXHfHI+iYvFRRCy1GxBXQ1BQXGBFLMtDq0V8kwgYu5j82h0cNx59VX2Pcco3aA/Ao2ZcPryQXuQ2mYRc9D6Kd2LM3P8lzR4c32TRDOnYgtW3ig6fMYy0axG+eiVx9pw25NPj0XPnzbj+IrIWtTfqgtUxi75jutqAdTxGnxKYQZGkOw3UCUYDLmhcbAjf81YJnEGQ2hgudT+wQULaHCybjUJFJspqrfj8zVp5quQ4dEHpFvrel9aEhMHmxSyKe8UG0RgKHcEQHKN6CJYsWIOqQ53miIc7zVdZEU7IhQWNk6pmzoVcbEUjXoLEJ4LYT44pA16ka9BYYeJDitn4qBvSBsRbEhBYIWMAjVI9qsZa5nZakkX4KCNEDRZV2aiVcUHsCTbGa+GXZXi8Ou/iEifDIJBsRqOYTCbebObYjfzW/bCMA9ze+32hWmcdUC0W63vwCDmX1RcxupWw39TpTcl8Q1KDellHAu8LZ+iyTcAST/TzQMWjjwQsw2hB4FSwp+Hmo7PT8wLT40IHvTCNhhLc8NzYrd5Zd1OLodzvvStN6DIL3MAcLtOo9QiPvTXaOAPA29fD1UWHRTlp7QGo1txHqF7GlGu3EHiOP8AU+iDyYnxQAgtt19UG+ZaTqpYkk4VyvOuhvoaBRGSicR+IacEGCMCbAnwKNlC0XeaaW1Nyh2Ye8+0+lxy3WujZPDoYIqcxtatbj2h1QGjF3vH8MUA38LfV+aJgQTq834m2h/YDxUktCpYMAoPcL1HMEeSV4nNue7soZMR28ilOZJNmiwqSaWQCYvOCI6gu0WHPmUA1hJoKuO8NBNK8TuRUeBDgj+Kc7tezbVrafzH2nenilU3i8R9m9xorRre6PIaW4ICIsMjcR/mbWvmgJgCoOm49RxCHbqvXPqgkWrlgKwoNFiwheoLo0qVrkOCt2uQFNcpWuQrXKVrkBLXKRrkMHLcOQEhy2L0OHLdrkEE7GytrvOiVQ2ki16o2PWI4nLUCwJNB5b1KxgpT00FenzQLmQaNcd5NuHOiVk5H13Gx8U9mH1NBoLBJcQZVAPNkcOvx+KXltHEFGzl2h3EX/ULH3A+KChkVQeRSj8KwYxml1TyA3pdEK6fspJAQGaCovuJ+JQUqa2cewE00ofA/XohpeFEguDmE2NSL0O+/h711SYlAKOIaBcEUrbeT0ISaZwhmYsNqXrrVvtbv0gIEcJna/xoP+IPbZ+fiOT+DtHb6Ou4yWa2I1rqcqUuDW4I4jmtGyD4D87RyI3O9kOB5VdRGRHBsTtW2bEAzA8dA4cwe64c2neQ0BmyIvatzTdW61bh16A0tvrryunsAVbxI4X8VsSBfs7mwvrur6IFMPChfva/Gw6I+DhzRqRxqaHrXfVFhpOoofoD4pTNHt3mGwkQxXtDmpmp7QzfhYNC7j3RetADmZl0YuhQSWwgSIkW18oFWs3WFKnQCldQCJFytYWQBlYKl0U3DqC5FRVxvTMdNwGqax3BoaMtIVmsaBTOQbdwaMBqQ3iSSaklaMw6JGIMRuSGC0thiulSO9xO/wASgq33LtNK0sSTq6urnKWFgVqnU6N1NtSfUq5swljfas1tQ6ujqO3dFLCwcEl2jiDb8t9OW8oKDE2ZiVo0ivOyRvaQSDqDQ9QuwQsPI1vxNDUgAiy5VjELLHit/nd6mqAUFZVagr2qDwrFhNViC4LYLFiCRimasWINgt2rFiDcLHeyVixAMxxDYhBoRDeQeB4jgVtBeTBhOJJJhMJJNST3tTvXixBA5LptYsQBTX+EP/s/4H5IFYsQROXYMM/w4X6PiFixA5iNHdtw/wBJSzERXsibnsnX6kVWLEEM2L/5z/usQU00fd9B7UX/AMd597WnwHBYsQSwrBtOI+C3b7IO+3uWLEEk1/hPO/JWu+tDeqR4Yf7q3m+CDzGQGh4ipJ8VixBPLXnKG4HY0BuBroNyfxLQ7W/hH/WsWIPZxg7OFYewf9uvvWsjo3qPeFixASD3R1/9lx/an/5cb9X/ABC8WIFixYsQeLFixB//2Q==" roundedCircle />
                                    </Col>


                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                </Col>
                                <Col xs lg="2">

                                </Col>

                            </Row>
                        </Carousel.Item>
                        <Carousel.Item>

                            <Row>
                                <Col xs lg="2">

                                </Col>
                                <Col xs lg="3">
                                    <Col xs={12} md={12}>
                                        <Image className="d-block w-10" src="data:image/jpeg;base64,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" roundedCircle />
                                    </Col>


                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                </Col>
                                <Col xs lg="2">

                                </Col>
                                <Col xs lg="3">
                                    <Col xs={12} md={12}>
                                        <Image className="d-block w-10" src="data:image/jpeg;base64,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" roundedCircle />
                                    </Col>


                                    <h3>Second slide label</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

                                </Col>
                                <Col xs lg="2">

                                </Col>

                            </Row>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>





        </Container>
    </body>
);

export default BodyContent;