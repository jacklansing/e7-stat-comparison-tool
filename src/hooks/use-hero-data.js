import { useStaticQuery, graphql } from 'gatsby';

const useHeroData = () => {
  const data = useStaticQuery(graphql`
    query {
      allHeroes: allHeroesWithStatsJson {
        heroes: nodes {
          name
          stats {
            maxLevel: lv60SixStarFullyAwakened {
              atk
              chc
              chd
              cp
              dac
              def
              eff
              efr
              hp
              spd
            }
          }
        }
      }
    }
  `);

  return data;
};

export default useHeroData;
