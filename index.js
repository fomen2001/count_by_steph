let options = {
    threshold: 1 // tells the browser that we only need to execute the callback only when an element (counter) is fully visible in the viewport
  }

const counters = document.querySelectorAll('.value'),
  speed = 400,
  /**
   * create an IntersectionObserver with the specified callback that will be executed for each intersection change for every counter we have. 
   */

  observer = new IntersectionObserver(
    entries => entries.forEach(entry =>{ entry.isIntersecting && animate(entry.target);}), options  
  ),
  // the animate function now accepts a counter (HTML element)
  animate = counter => {
    const value = +counter.dataset.count, 
      data = +counter.innerText, 
      time = value / speed;
    if (data < value) {
      counter.innerText = Math.ceil(data + time);
      setTimeout(() => animate(counter), 100);
    } else {
      counter.innerText = value;
    }
  };

// attach the counters to the observer
counters.forEach(c => observer.observe(c));