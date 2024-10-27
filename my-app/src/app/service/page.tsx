import Link from 'next/link'

const ServicePage = () => {
    return (
        <div>
            <h1>THIS IS SERVICE PAGE</h1>

            <ul>
                <li><Link href="/service/video.editing">This is video editing page</Link></li>
                
            </ul>
        </div>
    )
}
export default ServicePage