// function changeStatus(event) {
//     if (event.target.innerHTML == "Đang chiếu") {
//         document.getElementById("playing").classList.add("active");
//         document.getElementById("coming").classList.remove("active");
//     }
//     if (event.target.innerHTML != "Đang chiếu") {
//         document.getElementById("coming").classList.add("active");
//         document.getElementById("playing").classList.remove("active");
//     }
// }
// $('.carousel').slick();
// document.getElementById("film__block__content_2").style.display = "none";

document.getElementById("playing").addEventListener("click", () => {
    document.getElementById("playing").classList.add("active");
    document.getElementById("coming").classList.remove("active");
    // document.getElementById("film__block__content_1").style.display = "block";
    // document.getElementById("film__block__content_2").style.display = "none";

});
document.getElementById("coming").addEventListener("click", () => {
    document.getElementById("coming").classList.add("active");
    document.getElementById("playing").classList.remove("active");
    // document.getElementById("film__block__content_1").style.display = "none";
    // document.getElementById("film__block__content_2").style.display = "block";
});
function renderListCinema(id) {
    let cinemaContent = document.getElementById("cinema__content");
    // console.log(document.getElementById(id));
    let arrImg = document.getElementsByClassName("cinema__img");
    // console.log(arrImg);
    for (let element of arrImg) {
        if (element.id == id) {
            console.log(element);
            element.style.opacity = 1;
        } else {
            element.style.opacity = 0.5;
        }
    }
    // document.getElementById(id).style.opacity = 1;
    switch (id) {
        case 'bhd':
            cinemaContent.innerHTML = `
                <div class="cinema__item" onclick="renderWrapMovie(event)">
                    <img src="./imgs/bhd-star-bitexco-16105952137769.png" alt="">
                    <div class="txt-right">
                        <div>
                            <span>BHD Star</span>
                            <h6> - Bitexco</h6>
                        </div>
                        <p>L3-Bitexco Icon 68, 2 Hải..</p>
                        <h5>[Chi tiết]</h5>
                    </div>
                </div>
                <!-- <br> -->
                <div class="cinema__item" onclick="renderWrapMovie(event)">
                    <img src="./imgs/bhd-star-vincom-thao-dien-16105955634183.png" alt="">
                    <div class="txt-right">
                        <div>
                            <span>BHD Star</span>
                            <h6> - Vincom</h6>
                        </div>
                        <p>L3-Bitexco Icon 68, 2 Hải..</p>
                        <h5>[Chi tiết]</h5>
                    </div>
                </div>
            `;
            break;
        case 'cns':
            cinemaContent.innerHTML = `
            <div class="cinema__item" onclick="renderWrapMovie(event)">
            <img src="./imgs/cinestar-hai-ba-trung-15383833704033.jpg" alt="">
            <div class="txt-right">
                <div>
                    <span style="color: #df0d7a;">CNS</span>
                    <h6> - HBT</h6>
                </div>
                <p>L3-Bitexco Icon 68, 2 Hải..</p>
                <h5>[Chi tiết]</h5>
            </div>
        </div>
        <!-- <br> -->
        <div class="cinema__item" onclick="renderWrapMovie(event)">
            <img src="./imgs/cinestar-quoc-thanh-15379636956745.jpg" alt="">
            <div class="txt-right">
                <div>
                    <span style="color: #df0d7a;">CNS</span>
                    <h6> - Quốc Thanh</h6>
                </div>
                <p>L3-Bitexco Icon 68, 2 Hải..</p>
                <h5>[Chi tiết]</h5>
            </div>
        </div>`;
            break;
        case 'ddc':
            cinemaContent.innerHTML = `
            <div class="cinema__item" onclick="renderWrapMovie(event)">
                    <img src="./imgs/ddc-dong-da-15379624326697.jpg" alt="">
                    <div class="txt-right">
                        <div>
                            <span style="color:#9c9c9c">DDC</span>
                            <h6> - Đống Đa</h6>
                        </div>
                        <p>L3-Bitexco Icon 68, 2 Hải..</p>
                        <h5>[Chi tiết]</h5>
                    </div>
                </div>`;
            break;
        case 'megags':
            cinemaContent.innerHTML = `
            <div class="cinema__item" onclick="renderWrapMovie(event)">
                    <img src="./imgs/mega-gs-cao-thang-15380164745357.jpg" alt="">
                    <div class="txt-right">
                        <div>
                            <span style="color:#e5a813">MegaGS</span>
                            <h6> - Cao Thắng</h6>
                        </div>
                        <p>L3-Bitexco Icon 68, 2 Hải..</p>
                        <h5>[Chi tiết]</h5>
                    </div>
                </div>
            `;
            break;
        case 'dcine':
            cinemaContent.innerHTML = `<div class="cinema__item" onclick="renderWrapMovie(event)">
            <img src="./imgs/dcine-ben-thanh-15738149453578.png" alt="">
            <div class="txt-right">
                <div>
                    <span style="color:#000">DCine</span>
                    <h6> - Bến Thành</h6>
                </div>
                <p>L3-Bitexco Icon 68, 2 Hải..</p>
                <h5>[Chi tiết]</h5>
            </div>
        </div>`;
            break;
        case 'lotte':
            cinemaContent.innerHTML = `<div class="cinema__item" onclick="renderWrapMovie(event)">
            <img src="./imgs/lotte-cinema-go-vap-15383873960955.jpg" alt="">
            <div class="txt-right">
                <div>
                    <span style="color:#ca4137">Lotte</span>
                    <h6> - Gò Vấp</h6>
                </div>
                <p>L3-Bitexco Icon 68, 2 Hải..</p>
                <h5>[Chi tiết]</h5>
            </div>
        </div>
        <!-- <br> -->
        <div class="cinema__item" onclick="renderWrapMovie(event)">
            <img src="./imgs/lotte-cinema-phu-tho-15383865322515.jpg" alt="">
            <div class="txt-right">
                <div>
                    <span style="color:#ca4137">Lotte</span>
                    <h6> - Phú Thọ</h6>
                </div>
                <p>L3-Bitexco Icon 68, 2 Hải..</p>
                <h5>[Chi tiết]</h5>
            </div>
        </div>
        <div class="cinema__item" onclick="renderWrapMovie(event)">
            <div>
            <img src="./imgs/lotte-cinema-thu-duc-15383864347748.jpg" alt="">
            <div class="txt-right">
                <div>
                    <span style="color:#ca4137">Cinema</span>
                    <h6> - Thủ Đức</h6>
                </div>
                <p>L3-Bitexco Icon 68, 2 Hải..</p>
                <h5>[Chi tiết]</h5>
            </div>
            </div>
        </div>`;
            break;
    }
}
// function renderWrapMovie(event) {
//     console.log(event.target);
//     event.target.style.opacity = 1;
// }