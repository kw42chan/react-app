import React, { useState } from 'react';

import './App.css';

// This holds a list of some fiction people
// Some  have the same name but different age and id
const USERS = [
  { id :	1	, engStreetName:	'Yiu Wing Street'	,	chiStreetName:	'耀榮街'	},
  { id :	2	, engStreetName:	'Yiu Wing Lane'	,	chiStreetName:	'耀榮里'	},
  { id :	3	, engStreetName:	'Yip Shing Street'	,	chiStreetName:	'業成街'	},
  { id :	4	, engStreetName:	'Yan Fong Street'	,	chiStreetName:	'仁芳街'	},
  { id :	5	, engStreetName:	'Wo Yi Hop Lane'	,	chiStreetName:	'和宜合里'	},
  { id :	6	, engStreetName:	'Wo Tong Tsui Street'	,	chiStreetName:	'禾塘咀街'	},
  { id :	7	, engStreetName:	'Wo Kwai Lane'	,	chiStreetName:	'禾葵里'	},
  { id :	8	, engStreetName:	'Wing Yip Street'	,	chiStreetName:	'永業街'	},
  { id :	9	, engStreetName:	'Wing Fong Road'	,	chiStreetName:	'榮芳路'	},
  { id :	10	, engStreetName:	'Wing Cho Street'	,	chiStreetName:	'榮祖街'	},
  { id :	11	, engStreetName:	'Wang Wah Building'	,	chiStreetName:	'宏華大廈'	},
  { id :	12	, engStreetName:	'Wai Tai Road'	,	chiStreetName:	'華泰路'	},
  { id :	13	, engStreetName:	'Wai Kek Street'	,	chiStreetName:	'圍乪街'	},
  { id :	14	, engStreetName:	'Wah Yuen Drive'	,	chiStreetName:	'華員徑'	},
  { id :	15	, engStreetName:	'Wah Yiu Road'	,	chiStreetName:	'華瑤路'	},
  { id :	16	, engStreetName:	'Wah Tat Industrial Centre  '	,	chiStreetName:	'華達工業中心'	},
  { id :	17	, engStreetName:	'Wah Sing Street'	,	chiStreetName:	'華星街'	},
  { id :	18	, engStreetName:	'Wah King Hill Road'	,	chiStreetName:	'華景山路'	},
  { id :	19	, engStreetName:	'Tung Chun Industrial Building  '	,	chiStreetName:	'同珍工業大廈'	},
  { id :	20	, engStreetName:	'Tung Chi Street'	,	chiStreetName:	'童子街'	},
  { id :	21	, engStreetName:	'Texaco Road'	,	chiStreetName:	'德士古道'	},
  { id :	22	, engStreetName:	'Tang Uk Street'	,	chiStreetName:	'鄧屋街'	},
  { id :	23	, engStreetName:	'Tang Tak Centre'	,	chiStreetName:	'同德中心'	},
  { id :	24	, engStreetName:	'Tak Tai Path'	,	chiStreetName:	'德大徑'	},
  { id :	25	, engStreetName:	'Tai Yuen Street'	,	chiStreetName:	'大圓街'	},
  { id :	26	, engStreetName:	'Tai Wo Hau Road'	,	chiStreetName:	'大窩口道'	},
  { id :	27	, engStreetName:	'Tai Pak Tin Street'	,	chiStreetName:	'大白田街'	},
  { id :	28	, engStreetName:	'Tai Pak Tin Lane'	,	chiStreetName:	'大白田里'	},
  { id :	29	, engStreetName:	'Tai Loong Street'	,	chiStreetName:	'大隴街'	},
  { id :	30	, engStreetName:	'Tai Lin Pai Road'	,	chiStreetName:	'大連排道'	},
  { id :	31	, engStreetName:	'Tai Ha Street'	,	chiStreetName:	'大廈街'	},
  { id :	32	, engStreetName:	'Ta Chuen Ping Street'	,	chiStreetName:	'打磚坪街'	},
  { id :	33	, engStreetName:	'Sun Kwai Hing Plaza'	,	chiStreetName:	'新葵興廣場'	},
  { id :	34	, engStreetName:	'South China Industrial Building '	,	chiStreetName:	'南華工業大廈'	},
  { id :	35	, engStreetName:	'Sing Shing Building'	,	chiStreetName:	'成城大廈'	},
  { id :	36	, engStreetName:	'Shun Fong Street'	,	chiStreetName:	'信芳街'	},
  { id :	37	, engStreetName:	'Shing Fuk Street'	,	chiStreetName:	'盛福街'	},
  { id :	38	, engStreetName:	'Shing Fong Street'	,	chiStreetName:	'盛芳街'	},
  { id :	39	, engStreetName:	'Sheung Kok Street'	,	chiStreetName:	'上角街'	},
  { id :	40	, engStreetName:	'Shek Ying Path'	,	chiStreetName:	'石英徑'	},
  { id :	41	, engStreetName:	'Shek Yi Street'	,	chiStreetName:	'石宜路'	},
  { id :	42	, engStreetName:	'Shek Yam Street'	,	chiStreetName:	'石蔭路'	},
  { id :	43	, engStreetName:	'Shek Tau Street'	,	chiStreetName:	'石頭街'	},
  { id :	44	, engStreetName:	'Shek Pui Street'	,	chiStreetName:	'石貝街'	},
  { id :	45	, engStreetName:	'Shek Pai Street'	,	chiStreetName:	'石排街'	},
  { id :	46	, engStreetName:	'Shek Man Path'	,	chiStreetName:	'石文徑'	},
  { id :	47	, engStreetName:	'Shek Li Street'	,	chiStreetName:	'石梨街'	},
  { id :	48	, engStreetName:	'Shek Kin Street'	,	chiStreetName:	'石建街'	},
  { id :	49	, engStreetName:	'San Kwai Street'	,	chiStreetName:	'新葵街'	},
  { id :	50	, engStreetName:	'Riley House'	,	chiStreetName:	'達利中心'	},
  { id :	51	, engStreetName:	'Regent Centre'	,	chiStreetName:	'麗晶中心'	},
  { id :	52	, engStreetName:	'Reason Group Tower  '	,	chiStreetName:	'匯城集團大廈'	},
  { id :	53	, engStreetName:	'Po Lei Street'	,	chiStreetName:	'寶梨街'	},
  { id :	54	, engStreetName:	'Ping Lai Path'	,	chiStreetName:	'屏麗徑'	},
  { id :	55	, engStreetName:	'Ping Fu Path'	,	chiStreetName:	'屏富徑'	},
  { id :	56	, engStreetName:	'On Chit Street'	,	chiStreetName:	'安足街'	},
  { id :	57	, engStreetName:	'On Chit Lane'	,	chiStreetName:	'安捷里'	},
  { id :	58	, engStreetName:	'Mei Fong Street'	,	chiStreetName:	'美芳街'	},
  { id :	59	, engStreetName:	'Lim Cho Street'	,	chiStreetName:	'念祖街'	},
  { id :	60	, engStreetName:	'Lei Pui Street'	,	chiStreetName:	'梨貝街'	},
  { id :	61	, engStreetName:	'Lei Muk Road'	,	chiStreetName:	'梨木道'	},
  { id :	62	, engStreetName:	'Lam Tim Street'	,	chiStreetName:	'藍田街'	},
  { id :	63	, engStreetName:	'Lai Yiu Street'	,	chiStreetName:	'麗瑤街'	},
  { id :	64	, engStreetName:	'Lai Kong Street'	,	chiStreetName:	'荔崗街'	},
  { id :	65	, engStreetName:	'Lai King Hill Road'	,	chiStreetName:	'荔景山路'	},
  { id :	66	, engStreetName:	'Lai Fong Street'	,	chiStreetName:	'禮芳街'	},
  { id :	67	, engStreetName:	'Lai Cho Road'	,	chiStreetName:	'麗祖路'	},
  { id :	68	, engStreetName:	'Lai Chi Ling Road'	,	chiStreetName:	'荔枝嶺路'	},
  { id :	69	, engStreetName:	'Kwong Fai Lane'	,	chiStreetName:	'光輝里'	},
  { id :	70	, engStreetName:	'Kwong Fai Circuit'	,	chiStreetName:	'光輝圍'	},
  { id :	71	, engStreetName:	'Kwok Shui Road'	,	chiStreetName:	'國瑞路'	},
  { id :	72	, engStreetName:	'Kwai Yip Street'	,	chiStreetName:	'葵葉街'	},
  { id :	73	, engStreetName:	'Kwai Yik Road'	,	chiStreetName:	'葵益道'	},
  { id :	74	, engStreetName:	'Kwai Yi Road'	,	chiStreetName:	'葵義路'	},
  { id :	75	, engStreetName:	'Kwai Yan Road'	,	chiStreetName:	'葵仁路'	},
  { id :	76	, engStreetName:	'Kwai Wing Road'	,	chiStreetName:	'葵榮路'	},
  { id :	77	, engStreetName:	'Kwai Ting Road'	,	chiStreetName:	'葵定路'	},
  { id :	78	, engStreetName:	'Kwai Shing Circuit'	,	chiStreetName:	'葵盛圍'	},
  { id :	79	, engStreetName:	'Kwai Sau Road'	,	chiStreetName:	'葵秀路'	},
  { id :	80	, engStreetName:	'Kwai On Road'	,	chiStreetName:	'葵安道'	},
  { id :	81	, engStreetName:	'Kwai Luen Road'	,	chiStreetName:	'葵聯路'	},
  { id :	82	, engStreetName:	'Kwai Hop Street'	,	chiStreetName:	'葵合街'	},
  { id :	83	, engStreetName:	'Kwai Hing Road'	,	chiStreetName:	'葵興路'	},
  { id :	84	, engStreetName:	'Kwai Hau Street'	,	chiStreetName:	'葵孝街'	},
  { id :	85	, engStreetName:	'Kwai Fuk Road'	,	chiStreetName:	'葵福路'	},
  { id :	86	, engStreetName:	'Kwai Foo Road'	,	chiStreetName:	'葵富路'	},
  { id :	87	, engStreetName:	'Kwai Fat Road '	,	chiStreetName:	'葵發路'	},
  { id :	88	, engStreetName:	'Kwai Chung Road'	,	chiStreetName:	'葵涌道'	},
  { id :	89	, engStreetName:	'Kwai Cheong Road'	,	chiStreetName:	'葵昌路'	},
  { id :	90	, engStreetName:	'Kung Yip Street'	,	chiStreetName:	'工業街'	},
  { id :	91	, engStreetName:	'Ko Fong Street'	,	chiStreetName:	'高芳街'	},
  { id :	92	, engStreetName:	'King Cho Road'	,	chiStreetName:	'敬祖路'	},
  { id :	93	, engStreetName:	'Kin Hong Street '	,	chiStreetName:	'健康街'	},
  { id :	94	, engStreetName:	'Kin Chuen Street'	,	chiStreetName:	'健全街 '	},
  { id :	95	, engStreetName:	'Ka Ting Road'	,	chiStreetName:	'嘉定路'	},
  { id :	96	, engStreetName:	'Ka Hong Lane'	,	chiStreetName:	'嘉康里'	},
  { id :	97	, engStreetName:	'Ka Hing Road'	,	chiStreetName:	'嘉慶路'	},
  { id :	98	, engStreetName:	'Joint Street'	,	chiStreetName:	'聯接街'	},
  { id :	99	, engStreetName:	'Hing Shing Road'	,	chiStreetName:	'興盛路'	},
  { id :	100	, engStreetName:	'Hing Ning Road'	,	chiStreetName:	'興寧路'	},
  { id :	101	, engStreetName:	'Hing Fong Road'	,	chiStreetName:	'興芳路'	},
  { id :	102	, engStreetName:	'Eastern Factory Building'	,	chiStreetName:	'東方工業大廈'	},
  { id :	103	, engStreetName:	'Chun Pin Street'	,	chiStreetName:	'圳邊街'	},
  { id :	104	, engStreetName:	'Cheung Wing Road'	,	chiStreetName:	'昌榮路'	},
  { id :	105	, engStreetName:	'Che Fong Street'	,	chiStreetName:	'智芳街'	},
  { id :	106	, engStreetName:	'Castle Peak Road'	,	chiStreetName:	'青山公路'	},
  
];

function App() {
  const [name, setName] = useState('');
  const [foundUsers, setFoundUsers] = useState(USERS);

  const filter = (e) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = USERS.filter((user) => {
        return user.name.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setFoundUsers(results);
    } else {
      setFoundUsers(USERS);
      // If the text field is empty, show all users
    }

    setName(keyword);
  };

  return (
    <div className="container">
      <input
        type="search"
        value={name}
        onChange={filter}
        className="input"
        placeholder="Filter"
      />

      <div className="user-list">
        {foundUsers && foundUsers.length > 0 ? (
          foundUsers.map((user) => (
            <li key={user.id} className="user">
              <span className="user-id">{user.id}</span>
              <span className="user-name">{user.name}</span>
              <span className="user-age">{user.age} year old</span>
            </li>
          ))
        ) : (
          <h1>No results found!</h1>
        )}
      </div>
    </div>
  );
}

export default App;