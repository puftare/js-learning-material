## Proxy Design Pattern in JavaScript

### Intent

`Proxy` is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

![intent](./assets/proxy-2x.png)

### Problem

Why would you want to control access to an object? Here is an example: you have a massive object that consumes a vast amount of system resources. You need it from time to time, but not always.

![problem](./assets/problem-en-2x.png)

You could implement lazy initialization: create this object only when it’s actually needed. All of the object’s clients would need to execute some deferred initialization code. Unfortunately, this would probably cause a lot of code duplication.

In an ideal world, we’d want to put this code directly into our object’s class, but that isn’t always possible. For instance, the class may be part of a closed 3rd-party library.

### Solution

The Proxy pattern suggests that you create a new proxy class with the same interface as an original service object. Then you update your app so that it passes the proxy object to all of the original object’s clients. Upon receiving a request from a client, the proxy creates a real service object and delegates all the work to it.

![solution](./assets/solution-en-2x.png)

But what’s the benefit? If you need to execute something either before or after the primary logic of the class, the proxy lets you do this without changing that class. Since the proxy implements the same interface as the original class, it can be passed to any client that expects a real service object.

## Real World Analogy

![live-example](./assets/live-example-2x.png)

A credit card is a proxy for a bank account, which is a proxy for a bundle of cash. Both implement the same interface: they can be used for making a payment. A consumer feels great because there’s no need to carry loads of cash around. A shop owner is also happy since the income from a transaction gets added electronically to the shop’s bank account without the risk of losing the deposit or getting robbed on the way to the bank.

### Structure

- [1] [The `Service Interface` declares the interface of the Service. The proxy must follow this interface to be able to disguise itself as a service object.]

- [2] [The `Service` is a class that provides some useful business logic. ]

![structure](./assets/structure-2x.png)

- [3] [The `Proxy` class has a reference field that points to a service object. After the proxy finishes its processing (e.g., lazy initialization, logging, access control, caching, etc.), it passes the request to the service object.]

- [4] [The `Client` should work with both services and proxies via the same interface. This way you can pass a proxy into any code that expects a service object.]

### Pseudocode

This example illustrates how the `Proxy` pattern can help to introduce lazy initialization and caching to a 3rd-party YouTube integration library.

![pseudocode](./assets/example-2x.png)

The library provides us with the video downloading class. However, it’s very inefficient. If the client application requests the same video multiple times, the library just downloads it over and over, instead of caching and reusing the first downloaded file.

The proxy class implements the same interface as the original downloader and delegates it all the work. However, it keeps track of the downloaded files and returns the cached result when the app requests the same video multiple times.

```

// The interface of a remote service.

interface ThirdPartyYouTubeLib is

    method listVideos()
    method getVideoInfo(id)
    method downloadVideo(id)

    // The concrete implementation of a service connector. Methods
    // of this class can request information from YouTube. The speed
    // of the request depends on a user's internet connection as
    // well as YouTube's. The application will slow down if a lot of
    // requests are fired at the same time, even if they all request
    // the same information.

class ThirdPartyYouTubeClass implements ThirdPartyYouTubeLib is

    method listVideos() is
        // Send an API request to YouTube.

    method getVideoInfo(id) is
        // Get metadata about some video.

    method downloadVideo(id) is
        // Download a video file from YouTube.

    // To save some bandwidth, we can cache request results and keep
    // them for some time. But it may be impossible to put such code
    // directly into the service class. For example, it could have
    // been provided as part of a third party library and/or defined
    // as `final`. That's why we put the caching code into a new
    // proxy class which implements the same interface as the
    // service class. It delegates to the service object only when
    // the real requests have to be sent.

class CachedYouTubeClass implements ThirdPartyYouTubeLib is

    private field service: ThirdPartyYouTubeLib
    private field listCache, videoCache
    field needReset

    constructor CachedYouTubeClass(service: ThirdPartyYouTubeLib) is
        this.service = service

    method listVideos() is
        if (listCache == null || needReset)
            listCache = service.listVideos()
        return listCache

    method getVideoInfo(id) is
        if (videoCache == null || needReset)
            videoCache = service.getVideoInfo(id)
        return videoCache

    method downloadVideo(id) is
        if (!downloadExists(id) || needReset)
            service.downloadVideo(id)

    // The GUI class, which used to work directly with a service
    // object, stays unchanged as long as it works with the service
    // object through an interface. We can safely pass a proxy
    // object instead of a real service object since they both
    // implement the same interface.

class YouTubeManager is

    protected field service: ThirdPartyYouTubeLib

    constructor YouTubeManager(service: ThirdPartyYouTubeLib) is
        this.service = service

    method renderVideoPage(id) is
        info = service.getVideoInfo(id)
        // Render the video page.

    method renderListPanel() is
        list = service.listVideos()
        // Render the list of video thumbnails.

    method reactOnUserInput() is
        renderVideoPage()
        renderListPanel()

    // The application can configure proxies on the fly.

class Application is

    method init() is
        aYouTubeService = new ThirdPartyYouTubeClass()
        aYouTubeProxy = new CachedYouTubeClass(aYouTubeService)
        manager = new YouTubeManager(aYouTubeProxy)
        manager.reactOnUserInput()

```

## Applicability

There are dozens of ways to utilize the Proxy pattern. Let’s go over the most popular uses.

`Lazy initialization (virtual proxy). This is when you have a heavyweight service object that wastes system resources by being always up, even though you only need it from time to time.`

Instead of creating the object when the app launches, you can delay the object’s initialization to a time when it’s really needed.

`Access control (protection proxy). This is when you want only specific clients to be able to use the service object; for instance, when your objects are crucial parts of an operating system and clients are various launched applications (including malicious ones).`

The proxy can pass the request to the service object only if the client’s credentials match some criteria.

`Local execution of a remote service (remote proxy). This is when the service object is located on a remote server.`

In this case, the proxy passes the client request over the network, handling all of the nasty details of working with the network.

`Logging requests (logging proxy). This is when you want to keep a history of requests to the service object.`

The proxy can log each request before passing it to the service.

`Caching request results (caching proxy). This is when you need to cache results of client requests and manage the life cycle of this cache, especially if results are quite large.`

The proxy can implement caching for recurring requests that always yield the same results. The proxy may use the parameters of requests as the cache keys.

`Smart reference. This is when you need to be able to dismiss a heavyweight object once there are no clients that use it.`

The proxy can keep track of clients that obtained a reference to the service object or its results. From time to time, the proxy may go over the clients and check whether they are still active. If the client list gets empty, the proxy might dismiss the service object and free the underlying system resources.

The proxy can also track whether the client had modified the service object. Then the unchanged objects may be reused by other clients.

## How to Implement

1. If there’s no pre-existing service interface, create one to make proxy and service objects interchangeable. Extracting the interface from the service class isn’t always possible, because you’d need to change all of the service’s clients to use that interface. Plan B is to make the proxy a subclass of the service class, and this way it’ll inherit the interface of the service.

2. Create the proxy class. It should have a field for storing a reference to the service. Usually, proxies create and manage the whole life cycle of their services. On rare occasions, a service is passed to the proxy via a constructor by the client.

3. Implement the proxy methods according to their purposes. In most cases, after doing some work, the proxy should delegate the work to the service object.

4. Consider introducing a creation method that decides whether the client gets a proxy or a real service. This can be a simple static method in the proxy class or a full-blown factory method.

5. Consider implementing lazy initialization for the service object.

## Pros and Cons

[`PROS`]

- [x] [You can control the service object without clients knowing about it.]
- [x] [You can manage the lifecycle of the service object when clients don’t care about it.]
- [x] [The proxy works even if the service object isn’t ready or is not available.]
- [x] [Open/Closed Principle. You can introduce new proxies without changing the service or clients.]

[`CONS`]

- [x] [The code may become more complicated since you need to introduce a lot of new classes.]
- [x] [ The response from the service might get delayed.]

## Relations with other Patterns

- `Adapter` provides a different interface to the wrapped object, `Proxy` provides it with the same interface, and `Decorator` provides it with an enhanced interface.

- `Facade` is similar to `Proxy` in that both buffer a complex entity and initialize it on its own. Unlike Facade, Proxy has the same interface as its service object, which makes them interchangeable.

- `Decorator` and `Proxy` have similar structures, but very different intents. Both patterns are built on the composition principle, where one object is supposed to delegate some of the work to another. The difference is that a Proxy usually manages the life cycle of its service object on its own, whereas the composition of Decorators is always controlled by the client.

## Implementing the Proxy Design Pattern in JavaScript

```

const person = {

  name: "John Doe",
  age: 42,
  nationality: "American"

};

const personProxy = new Proxy(person, {

  get: (obj, prop) => {

    if (!obj[prop]) {
      console.log(`Hmm.. this property doesn't seem to exist`);

    } else {
      console.log(`The value of ${prop} is ${obj[prop]}`);

    }

  },
  set: (obj, prop, value) => {

    if (prop === "age" && typeof value !== "number") {
      console.log(`Sorry, you can only pass numeric values for age.`);

    } else if (prop === "name" && value.length < 2) {
      console.log(`You need to provide a valid name.`);

    } else {
      console.log(`Changed ${prop} from ${obj[prop]} to ${value}.`);
      obj[prop] = value;

    }
    return true;
  }

});

personProxy.nonExistentProperty;
personProxy.age = "44";
personProxy.name = "";

```

The proxy made sure that we weren't modifying the person object with faulty values, which helps us keep our data pure!

![proxy](./assets/jspat-51_xvbob9.gif)

```

const person = {

  name: "John Doe",
  age: 42,
  nationality: "American"

};

const personProxy = new Proxy(person, {

  get: (obj, prop) => {

    console.log(`The value of ${prop} is ${Reflect.get(obj, prop)}`);
  },
  set: (obj, prop, value) => {

    console.log(`Changed ${prop} from ${obj[prop]} to ${value}`);
    return Reflect.set(obj, prop, value);
  }

});

personProxy.name;
personProxy.age = 43;
personProxy.name = "Jane Doe";

```

JavaScript provides a built-in object called `Reflect`, which makes it easier for us to manipulate the target object when working with proxies.

Previously, we tried to modify and access properties on the target object within the proxy through directly getting or setting the values with bracket notation. Instead, we can use the Reflect object. The methods on the Reflect object have the same name as the methods on the `handler` object.

Instead of accessing properties through `obj[prop]` or setting properties through `obj[prop] = value`, we can access or modify properties on the target object through `Reflect.get()` and `Reflect.set()`. The methods receive the same arguments as the methods on the handler object.
