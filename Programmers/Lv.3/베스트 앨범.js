// '묶는다' 라는 개념이 필요하다면 해시 테이블 (Map 객체)을 이용하여 푸는 것이 대부분이다.

// 1. 같은 장르끼리 묶는다
// 2. 묶인 노래들 중 재생순으로 정렬해야한다.
// 3. 노래는 최대 2개씩 뽑아야 한다.

function solution(genres, plays) {
  const genreMap = new Map();

  genres
    .map((genre, index) => [genre, plays[index]])
    .forEach(([genre, play], index) => {
      const data = genreMap.get(genre) || { total: 0, songs: [] };
      genreMap.set(genre, {
        total: data.total + play,
        songs: [...data.songs, { play, index }]
          .sort((a, b) => b.play - a.play)
          .slice(0, 2),
      });
    });

  return [...genreMap.entries()]
    .sort((a, b) => b[1].total - a[1].total)
    .flatMap((item) => item[1].songs)
    .map((item) => item.index);
}
