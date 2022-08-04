
const Footer = () => {
    return (
        <footer className="flex justify-around items-center border-t-2 border-Oro mb-0 bg-Rojo-Dark mt-10 font-Barlow text-white text-xl h-20">
            <div className="flex gap-x-3">
                <h2>¡Seguinos en las redes!</h2>
                <img className="w-10 h-10" src="https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/facebook.png?alt=media&token=c97047c7-dbd9-4cf4-a8b6-abc0badeca6c" alt="facebook" />
                <img className="w-10 h-10" src="https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/instagram.png?alt=media&token=9b1871e1-7bce-4fa7-a746-0cb94fe68b99" alt="instagram" />
                <img className="w-10 h-10" src="https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/gorjeo.png?alt=media&token=de29d25f-0ae1-4f23-b335-14fbe6e2b624" alt="twitter" />
                <img className="w-10 h-10" src="https://firebasestorage.googleapis.com/v0/b/vapor-c6404.appspot.com/o/youtube.png?alt=media&token=a4c55a6b-7e51-40a2-a6de-9535033d5cd0" alt="youtube" />
            </div>
            <div className="flex flex-col">
                <h2>vaportg@gmail.com</h2>
                <h2>Tel: 1155677889</h2>
            </div>
        </footer>
    )
}

export default Footer