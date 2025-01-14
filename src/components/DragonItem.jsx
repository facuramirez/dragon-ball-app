/* eslint-disable react/prop-types */
import "../css/DragonItem.css";

export const DragonItem = ({
  name,
  ki,
  maxKi,
  race,
  gender,
  image,
  affiliation,
}) => {
  return (
    <div className="dragon-item flex flex-col rounded-2xl">
      <figure className="w-full h-[15rem] md:h-[20rem] object-cover self-center rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="h-full mx-auto scale-[1.10] hover:scale-125 transition-all duration-500"
        />
      </figure>
      <article className="flex flex-col gap-y-2 bg-[var(--card-color)] rounded-b-lg p-6 [&>section>span]:text-[var(--primary-color)]">
        <section className="flex flex-col gap-y-1">
          <h3 className="text-lg lg:text-2xl font-extrabold">{name}</h3>
          <span>
            {race} - {gender}
          </span>
        </section>

        <section>
          <p>Base KI</p>
          <span>{ki}</span>
        </section>

        <section>
          <p>Total KI</p>
          <span>{maxKi}</span>
        </section>

        <section>
          <p>Affiliation</p>
          <span>{affiliation}</span>
        </section>
      </article>
    </div>
  );
};
