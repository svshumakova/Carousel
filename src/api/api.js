const wordUrl = 'http://api.wordnik.com/v4/words.json/randomWords?hasDictionaryDef=' +
    'true&includePartOfSpeech=idiom&limit=10&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5';

export const fetchWords = () => {
  return fetch(wordUrl)
      .then((res) => res.json())
      .then((res) => res)
      .catch((err) => {
        console.log(err);
      });
}