import { useRef } from "react";
import { useProductos } from "../hooks/useProductos";

const Nosotros = () => {

  const ref = useRef();
  const date = useRef(new Date());

  if (counter % 10 === 0) {
    date.current = new Date();
  }
  console.log(ref.current);

  const scrollear = () => {
    ref.current.scrollIntoView();
    ref.current.innerText = "Hola mundo";
  };

  return (
    <div>
      <h2>Nosotros</h2>
      <hr />
      <p>Componente generado: {date.current.toLocaleString()}</p>

      <button onClick={scrollear}>Scroll</button>

      <p>
        Aenean consectetur ultricies orci et semper. Sed bibendum pharetra orci
        et porttitor. Nullam eu turpis cursus, ultrices nunc nec, cursus nisi.
        Duis a viverra dui. Etiam hendrerit urna sed purus dignissim, sit amet
        mattis purus vulputate. Donec eget lectus vel libero molestie fringilla
        id et neque. Vestibulum et erat ac ante porta molestie et vitae mi. In
        risus lacus, mollis et rutrum vel, elementum nec justo. Nunc ac nunc
        condimentum, tempus tellus eu, vulputate mauris. Phasellus vel
        scelerisque neque, at ornare eros. Donec metus nisi, aliquet non
        pharetra non, mattis quis tellus. Quisque ornare dolor ac purus
        fringilla rhoncus. Sed nec rhoncus elit. Nullam sagittis sem nec velit
        finibus vestibulum. Nulla viverra nec tortor eu lacinia.
      </p>
      <p>
        Aenean consectetur ultricies orci et semper. Sed bibendum pharetra orci
        et porttitor. Nullam eu turpis cursus, ultrices nunc nec, cursus nisi.
        Duis a viverra dui. Etiam hendrerit urna sed purus dignissim, sit amet
        mattis purus vulputate. Donec eget lectus vel libero molestie fringilla
        id et neque. Vestibulum et erat ac ante porta molestie et vitae mi. In
        risus lacus, mollis et rutrum vel, elementum nec justo. Nunc ac nunc
        condimentum, tempus tellus eu, vulputate mauris. Phasellus vel
        scelerisque neque, at ornare eros. Donec metus nisi, aliquet non
        pharetra non, mattis quis tellus. Quisque ornare dolor ac purus
        fringilla rhoncus. Sed nec rhoncus elit. Nullam sagittis sem nec velit
        finibus vestibulum. Nulla viverra nec tortor eu lacinia.
      </p>
      <p>
        Aenean consectetur ultricies orci et semper. Sed bibendum pharetra orci
        et porttitor. Nullam eu turpis cursus, ultrices nunc nec, cursus nisi.
        Duis a viverra dui. Etiam hendrerit urna sed purus dignissim, sit amet
        mattis purus vulputate. Donec eget lectus vel libero molestie fringilla
        id et neque. Vestibulum et erat ac ante porta molestie et vitae mi. In
        risus lacus, mollis et rutrum vel, elementum nec justo. Nunc ac nunc
        condimentum, tempus tellus eu, vulputate mauris. Phasellus vel
        scelerisque neque, at ornare eros. Donec metus nisi, aliquet non
        pharetra non, mattis quis tellus. Quisque ornare dolor ac purus
        fringilla rhoncus. Sed nec rhoncus elit. Nullam sagittis sem nec velit
        finibus vestibulum. Nulla viverra nec tortor eu lacinia.
      </p>
      <p>
        Aenean consectetur ultricies orci et semper. Sed bibendum pharetra orci
        et porttitor. Nullam eu turpis cursus, ultrices nunc nec, cursus nisi.
        Duis a viverra dui. Etiam hendrerit urna sed purus dignissim, sit amet
        mattis purus vulputate. Donec eget lectus vel libero molestie fringilla
        id et neque. Vestibulum et erat ac ante porta molestie et vitae mi. In
        risus lacus, mollis et rutrum vel, elementum nec justo. Nunc ac nunc
        condimentum, tempus tellus eu, vulputate mauris. Phasellus vel
        scelerisque neque, at ornare eros. Donec metus nisi, aliquet non
        pharetra non, mattis quis tellus. Quisque ornare dolor ac purus
        fringilla rhoncus. Sed nec rhoncus elit. Nullam sagittis sem nec velit
        finibus vestibulum. Nulla viverra nec tortor eu lacinia.
      </p>
      <p>
        Aenean consectetur ultricies orci et semper. Sed bibendum pharetra orci
        et porttitor. Nullam eu turpis cursus, ultrices nunc nec, cursus nisi.
        Duis a viverra dui. Etiam hendrerit urna sed purus dignissim, sit amet
        mattis purus vulputate. Donec eget lectus vel libero molestie fringilla
        id et neque. Vestibulum et erat ac ante porta molestie et vitae mi. In
        risus lacus, mollis et rutrum vel, elementum nec justo. Nunc ac nunc
        condimentum, tempus tellus eu, vulputate mauris. Phasellus vel
        scelerisque neque, at ornare eros. Donec metus nisi, aliquet non
        pharetra non, mattis quis tellus. Quisque ornare dolor ac purus
        fringilla rhoncus. Sed nec rhoncus elit. Nullam sagittis sem nec velit
        finibus vestibulum. Nulla viverra nec tortor eu lacinia.
      </p>
      <p>
        Aenean consectetur ultricies orci et semper. Sed bibendum pharetra orci
        et porttitor. Nullam eu turpis cursus, ultrices nunc nec, cursus nisi.
        Duis a viverra dui. Etiam hendrerit urna sed purus dignissim, sit amet
        mattis purus vulputate. Donec eget lectus vel libero molestie fringilla
        id et neque. Vestibulum et erat ac ante porta molestie et vitae mi. In
        risus lacus, mollis et rutrum vel, elementum nec justo. Nunc ac nunc
        condimentum, tempus tellus eu, vulputate mauris. Phasellus vel
        scelerisque neque, at ornare eros. Donec metus nisi, aliquet non
        pharetra non, mattis quis tellus. Quisque ornare dolor ac purus
        fringilla rhoncus. Sed nec rhoncus elit. Nullam sagittis sem nec velit
        finibus vestibulum. Nulla viverra nec tortor eu lacinia.
      </p>
      <p>
        Aenean consectetur ultricies orci et semper. Sed bibendum pharetra orci
        et porttitor. Nullam eu turpis cursus, ultrices nunc nec, cursus nisi.
        Duis a viverra dui. Etiam hendrerit urna sed purus dignissim, sit amet
        mattis purus vulputate. Donec eget lectus vel libero molestie fringilla
        id et neque. Vestibulum et erat ac ante porta molestie et vitae mi. In
        risus lacus, mollis et rutrum vel, elementum nec justo. Nunc ac nunc
        condimentum, tempus tellus eu, vulputate mauris. Phasellus vel
        scelerisque neque, at ornare eros. Donec metus nisi, aliquet non
        pharetra non, mattis quis tellus. Quisque ornare dolor ac purus
        fringilla rhoncus. Sed nec rhoncus elit. Nullam sagittis sem nec velit
        finibus vestibulum. Nulla viverra nec tortor eu lacinia.
      </p>
      <p>
        Aenean consectetur ultricies orci et semper. Sed bibendum pharetra orci
        et porttitor. Nullam eu turpis cursus, ultrices nunc nec, cursus nisi.
        Duis a viverra dui. Etiam hendrerit urna sed purus dignissim, sit amet
        mattis purus vulputate. Donec eget lectus vel libero molestie fringilla
        id et neque. Vestibulum et erat ac ante porta molestie et vitae mi. In
        risus lacus, mollis et rutrum vel, elementum nec justo. Nunc ac nunc
        condimentum, tempus tellus eu, vulputate mauris. Phasellus vel
        scelerisque neque, at ornare eros. Donec metus nisi, aliquet non
        pharetra non, mattis quis tellus. Quisque ornare dolor ac purus
        fringilla rhoncus. Sed nec rhoncus elit. Nullam sagittis sem nec velit
        finibus vestibulum. Nulla viverra nec tortor eu lacinia.
      </p>
      <p>
        Aenean consectetur ultricies orci et semper. Sed bibendum pharetra orci
        et porttitor. Nullam eu turpis cursus, ultrices nunc nec, cursus nisi.
        Duis a viverra dui. Etiam hendrerit urna sed purus dignissim, sit amet
        mattis purus vulputate. Donec eget lectus vel libero molestie fringilla
        id et neque. Vestibulum et erat ac ante porta molestie et vitae mi. In
        risus lacus, mollis et rutrum vel, elementum nec justo. Nunc ac nunc
        condimentum, tempus tellus eu, vulputate mauris. Phasellus vel
        scelerisque neque, at ornare eros. Donec metus nisi, aliquet non
        pharetra non, mattis quis tellus. Quisque ornare dolor ac purus
        fringilla rhoncus. Sed nec rhoncus elit. Nullam sagittis sem nec velit
        finibus vestibulum. Nulla viverra nec tortor eu lacinia.
      </p>
      <p>
        Aenean consectetur ultricies orci et semper. Sed bibendum pharetra orci
        et porttitor. Nullam eu turpis cursus, ultrices nunc nec, cursus nisi.
        Duis a viverra dui. Etiam hendrerit urna sed purus dignissim, sit amet
        mattis purus vulputate. Donec eget lectus vel libero molestie fringilla
        id et neque. Vestibulum et erat ac ante porta molestie et vitae mi. In
        risus lacus, mollis et rutrum vel, elementum nec justo. Nunc ac nunc
        condimentum, tempus tellus eu, vulputate mauris. Phasellus vel
        scelerisque neque, at ornare eros. Donec metus nisi, aliquet non
        pharetra non, mattis quis tellus. Quisque ornare dolor ac purus
        fringilla rhoncus. Sed nec rhoncus elit. Nullam sagittis sem nec velit
        finibus vestibulum. Nulla viverra nec tortor eu lacinia.
      </p>
      <p ref={ref}>
        Aenean consectetur ultricies orci et semper. Sed bibendum pharetra orci
        et porttitor. Nullam eu turpis cursus, ultrices nunc nec, cursus nisi.
        Duis a viverra dui. Etiam hendrerit urna sed purus dignissim, sit amet
        mattis purus vulputate. Donec eget lectus vel libero molestie fringilla
        id et neque. Vestibulum et erat ac ante porta molestie et vitae mi. In
        risus lacus, mollis et rutrum vel, elementum nec justo. Nunc ac nunc
        condimentum, tempus tellus eu, vulputate mauris. Phasellus vel
        scelerisque neque, at ornare eros. Donec metus nisi, aliquet non
        pharetra non, mattis quis tellus. Quisque ornare dolor ac purus
        fringilla rhoncus. Sed nec rhoncus elit. Nullam sagittis sem nec velit
        finibus vestibulum. Nulla viverra nec tortor eu lacinia.
      </p>
    </div>
  );
};

export default Nosotros;
