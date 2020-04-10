# Features

React-Karusel is a React component for Karusel, the next generation lightweight dependancy free Carousel for all for all of your needs. Did I also mention it's super customizable ? [Learn more here]('https://www.npmjs.com/package/karusel')

# Installation

```shell
	npm i -s react-karusel
```

# Usage

```js
import ReactKarusel as Karusel from 'react-karusel'

...

render(){
	const settings = {
		prevArrow: <MyPrevButton/>,
		nextArrow: <MyNextButton/>,
	};

	return (
		<Karusel settings={settings}>

			<img src={'/path/to/some/image.jpeg'}/>

			<img src={'/path/to/some/image.jpeg'}/>

			<img src={'/path/to/some/image.jpeg'}/>

		</Karusel>
	)
}
```
