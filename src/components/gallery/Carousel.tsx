import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, MouseEvent } from 'react';
import images from '../../images/carousel/CarouselImages';

interface CarouselProps {}

export const Carousel: React.FC<CarouselProps> = () => {
	const carouselRef = useRef<null | HTMLDivElement>(null);

	const imageWrapRef: Element | null = document.querySelector('.image-wrap');
	const scrollWidth: number | undefined = imageWrapRef?.clientWidth;

	const handleArrowClick = (
		scrollDistance: number | undefined,
		scrollRight: boolean,
		event: MouseEvent
	) => {
		if (scrollWidth !== undefined) {
			const scroll: number = scrollWidth;
			if (scrollRight) {
				carouselRef.current?.scrollBy({
					left: scroll,
					behavior: 'smooth',
				});
			} else {
				carouselRef.current?.scrollBy({
					left: -scroll,
					behavior: 'smooth',
				});
			}
		}
	};

	return (
		<div className="carousel-wrap">
			<div
				className="arrow arrow-left"
				onClick={event => handleArrowClick(scrollWidth, false, event)}
			>
				<FontAwesomeIcon icon={faArrowLeft} />
			</div>
			<div
				className="arrow arrow-right"
				onClick={event => handleArrowClick(scrollWidth, true, event)}
			>
				<FontAwesomeIcon icon={faArrowRight} />
			</div>
			<div className="carousel" ref={carouselRef}>
				{images.map((image: string, index: number) => (
					<div key={index} className="image-wrap">
						<img src={image} alt="tat" />
					</div>
				))}
			</div>
		</div>
	);
};
