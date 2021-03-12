import htmlToJson from "html-to-json";

class Jokes {
  static getJokes(req, res) {
    var allJokes = [];
    let count = 0;
    let url = 'http://bash.org.pl/latest/';

      const extractJokes = (link) => {
      // let allJokes = []
      htmlToJson.request(link,
        (doc) => {
          htmlToJson.parse(doc, function () {
              return this.map('.quote', function ($item) {
                allJokes[count] = $item.text().substring(5,  $item.text().length - 6)
                count += 1
                return allJokes
              });
          })
          .done(function (items) {
            return res.status(200).send({
              "jokes": items
            });
        });
      })
    }
    extractJokes(url);
  }
}
export default Jokes;