import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Imag from "./Component/Imag";

function App() {
  return (
    <div className="App">
      <Imag
        name="Bruce"
        img="https://www.paypalobjects.com/digitalassets/c/gifts/au/amazon.png"
      />
      <Imag
        name="Bruce"

        img="data:image/png;base64,https://www.paypalobjects.com/digitalassets/c/gifts/au/amazon.png///8jHx73pR4AAADc3Nz3nwD3nAAgHBsdGBf4+PgHAAAZFBMeGhj3oQDr6+v09PTHx8dBQUH//vr3oxQTDQyCgYH++fH5wXj4slH98d797NaoqKi4uLiJiIjQ0NDi4uKgn59gX1+Uk5NzcnI0MTH737v71KL6yYz4rUP85sv6zJQ7OTktKipramtUU1JKSEj716z4qS/5tl75u22Sec9qAAAE9ElEQVR4nO2bi5KqOBCGhRguYYIoCIKIF0RA8QK+/7ttQF0J3t0J51Rt/poqKZH0Z6e708mUnQ4XFxcXFxcXFxcXFxcXFxfXfenGeDjfyAhY2X678LutA0zHu8wClqbIRD+ahZDcnwRtEgQhAposUJIVBOZGWwTTObCEu9LATm8FYaw9IChlyX4LCEMgP0YQBMViDxGCZwRlXADWGTJ5hUA80VeZIhjoJYIggDFThkyj/a5ZgBSJRoAo/R5DhDE9E0iYD2ezyVxpJApiWCbUvVJ3Agqnp/e72wbbhB1DUDclg9q3HVJxou3ZMUzqlgDl8CXlIYUdw7wWkdacukVHCmIWlPqm9mVpN3S6VMIAdqvGAhAhS/uRZSWjzejLeoKCKTOGzjTwx5PtbrMUrAV9R+//1BlaaGh606aRXusMd6j+Agb1DzPoXcNfZPIfYdBJhA53GqiyhVq32mHQjcluScyj5qLZGoMRagApj3s65gyqT7Y1T3tK5gzB7nlT2wKDD7RXBKwZbnpaWdFQmRg/rTEsGggaEPbbydg3jE1b9cGgERTQ97unRr61Wq3TxQBtrhvt1hjorhGEtW6pLYauUHeDtqtvp9pioHOC7pXa6mGyuhlrS93T28mLKe0GeovfbWft9qmIVGgzAR2urBhmdTNyRrfO9P4CsDodm9R3tvKSZthTqwhidRZDMwiUu+lYESxWm94htcOn91khvfv/WTI6illQdtCwditorqaA0WTM6HMgcK3UOrXrLsXqKIbOTUGbX8x0hdu2BoVMGBpxJ6BdQGZd1Wd3EJjNRtbwuAb2YThH99tLmc3+v9lEkWnXbg7lro6YsWCYZs8aao32kgzYHM4NnxzSgmFYj1mNEQLZXD/q62Ww6PQ217uoz+wkpqs1C8FJSnU8fO140ZzhvzEM7Z4nkHVy/OwMAdgUh4v0HWi4QrbA5FKtqoCRGZ+ZE433ZMv97yRYIAtrK+gCkHRtVCfbjVZxHK8iz/41CNUYLsFZ2dang8+3+nRCRE4OL0oObxux89h9xTENgqA7fblCH0QJm5VEIjMZvMswcCRx/St+G0k4T5IRUVJSmMkHozoQ5qu3mR8rijzXtgdEtpeYnzF0DtCEcPVqRj5SikWz+OgJL8ciFh33F5zRGVSjpKYI1589aBdQFDEs3g/lRwMdRuKIvEZQlNJPHybzQcJIws7HT141SI9QMjHulDEmip8Hulu6QhShmTvpN2lip06OyfeAozKwyNzGXwwyiExcUpA5SY6HzzDs6JjAypMwLp90JVHyvmAgI8XwRGGaUErig/dWjLpRnEhSVZdMqThZXmMz+QqhpHBwNSPleJgAJc4hde0HKLbrRXFBPojN0xNwdA4mmxSp79xQybtSVMNCKCajo7NeRannkhJk267rpWRdcopRblb+v3w0iS6wqQS/iYar3BhLplgTqf8YQqnS+ZWgnVeFi9OkopZQRzj6TwhEg0OBIYXxXCSI43oMuzD/hWo38NaJid/BMCG+SWY3/q3ewVuNoATNxyBkiiQpWX9VTd7XIF0fEyxBbJqNCMEELyniiK39i2w3PcRFkuS5eO5O8jwpnFX0MGcZspBykKapV/YIbdvm4uLi4uLi4uLi4uL6H0u9uWb7m4B76uk6+dN1Ve+p1ZXaO72ht/OblVJqT1WJ3R65qK7VjlqquuL6u/QP0xVYmClk8PwAAAAASUVORK5CYII="
      />
      <Imag
      
      date="12-05-2020"
      heading=""
      devices="macbook"
      
        name="guh"
        
        img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGsAAACDCAMAAAC9dhXRAAAAZlBMVEUAAAD////8/Pzp6enu7u7f398cHBzy8vLGxsYfHx8aGhpdXV3T09PBwcG7u7vQ0NB+fn5UVFRkZGQSEhKsrKycnJyFhYU5OTkvLy94eHhNTU2jo6NwcHC1tbUqKirZ2dlGRkaQkJDZerpLAAAEIklEQVRogb2b2YKqMBBEGwKjiIhsooKK//+TV1E0SYdFSN16JnPM3qnuIceavN09DPYDH5AtUHWkpxI4yz/RWw2YJfb00RnLumy+KAqRLC8lWQcga3tVUFThWBFpimCsnY6iFYrFekXHoc+XsGKGogLEEn+cdQOxQo4aOjWWsHKOoh2GJTYcVboY1p6jKB9uMpflG1DNcLdms0zdikfazGStDKihY3cJqzIsjNFGM1lHzhIglvf7ZM1mXRhq6C5ZxrrPQc1kJSrpOmEAZ7MyBZV601rNY8mk4DK51VLWfejWt8nKiumkRfNVFtOWxEKWe/N/6dBk1shF8f3Oj9dRtL6J3gb9LG9dnZq/TZZtgrpaD3dD7PblZx9k1zrf/sAS+VmNkoJk13e4+lWj7renjnuOM7LilDd+4NKYD8/jRxk+bVXm2mAYWOukrzU1ldI593YyRDhS53LlxzGWMIR9supu6lxR9Xbpo/N2gGWK+jT91UUU7w79vVd072Ot0vHGv+rsGlkisI963DiegXVDkJ4SjLVFoSgQGssUydrSK9D/sEzRpT2lCmt8ryxSJLFYZGRV2cX9sgxPX4s6+9LacEskqnblNV8gUR9LsWV5pivEOurFOgBRtXr2mp7ZtiT7pISdrcBTWchFuHZU1hqHUl3tB+s03mamAqGxXMgF2UozSQl4PAUsZjPYB5Z0d3QW7jLRA2VyxtvMFEt3EO7qZ34scX/YlnzGmhDozpSOcgh2+fPsFNUoFrf4aOIT4Hdxq54aFItncQh2GnI7h2ChBvfqUaT/y+JmPW4M/+fauHMWLLBJOQu2lzPOgp1RPHWJO3v5ZiZcuHFiLG7rW5PulBEw6tUHkQSOddY6BoyjtJfDkwV8pWgdI2M20JZyjQVciPQnVBbO8iKtTAX6JiL1tCeWzLKsXGHhIt9WkcyCThhJgQfYB2hVfFnAx/lbyerDAh6/b12jjuUZsuC2Vftv7wsXB3yVHUTLwg/iU2XLWqFXYqvi9dLEOstv3V4sZB6g07XzsQH5IV1Vx8KvjszrWPBz6hktdi4E+LAn2kr5FDAqcSQWLtZuFcssbMdCR2FBZyxWWc51vMlcpY7Gwrl75OssXEB1cBgL9mRxOQuVWOkCKdW9hIzix7RUWZC7xTOzEJvs+5LVHWDrYY6W15O1svxqua76WbaLHeQnM3fRrS58xWA21PaMFNz8ItVrM9UsWYsHjroPwCUseaWZlpQy1mJZev3plV/mGjMrIdxa/6s99WyDsGOS1vt9nSaDbymG6q3T68uYBuHl5nVT7vl52JPfDwx1kL01gb5pNTYXVqwnKtOHiak0tr/+0GXVD7WxqtBQbLcxF+0P1VX68q4u84EqXr+QtklvwepwDae47JuMyvDOx47hLsUpDNND3v9vI/8AZ80v/+7rf3EAAAAASUVORK5CYII="
      />
    </div>
  );
}

export default App;

