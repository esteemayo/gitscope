import Chart from '@/charts/Chart';
import '../../styles/components/ChartSection.scss';

const ChartSection = () => {
  return (
    <section className='chart-section'>
      <div className='chart-section__container'>
        <div className='chart-section__wrapper'>
          <Chart title='Top Languages'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias libero quidem
            assumenda corrupti excepturi. Facilis sit aspernatur expedita doloremque accusantium
            placeat ut repellat, maxime maiores consequuntur dolorem atque, nesciunt a.
            Animi corrupti perspiciatis labore, quos enim eligendi alias commodi, eius repellat
            ex sed illum eaque nisi unde nesciunt facilis suscipit exercitationem veniam odio
            fuga harum quibusdam neque consequuntur fugiat! Quis?
          </Chart>

          <Chart title='Most Starred'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In consectetur odio beatae
            incidunt reprehenderit dolorem? Possimus, doloremque alias? Fugiat blanditiis magnam
            ducimus ipsam accusamus possimus iusto incidunt optio rerum autem.
            At, reiciendis, iste dignissimos nesciunt accusamus rerum eligendi ducimus perspiciatis
            fuga quia eveniet quis officia odit aliquid alias deleniti quam placeat atque laborum earum!
            Iure explicabo possimus omnis adipisci repellat!
          </Chart>

          <Chart title='Stars per Language'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore, ea tempore sapiente
            corrupti recusandae hic facilis officiis asperiores odit, consectetur id dignissimos a
            repellendus aspernatur quidem deserunt molestias, tenetur aliquid!
            Odit quisquam quidem vero sit. Impedit ullam accusantium qui illum perspiciatis nostrum.
            A alias odio suscipit quisquam iusto reiciendis fuga officia laboriosam molestias nisi incidunt,
            laudantium at ex minima tempora.
          </Chart>
        </div>
      </div>
    </section>
  )
}

export default ChartSection