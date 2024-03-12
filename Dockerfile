FROM node:lts as node

WORKDIR /var/www/html

COPY . /var/www/html

RUN npm update && npm install && npm run dev

# -------------------------------------------------------------------------------

# FROM composer:2.5 as composer
FROM php:8.0

WORKDIR /var/www/html

COPY --from=node  /var/www/html /var/www/html

RUN apt-get update && apt-get install -y --no-install-recommends \
    ca-certificates \
    curl \
    unzip \
    && rm -rf /var/lib/apt/lists/*

RUN docker-php-ext-install pdo_mysql

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN composer update --no-scripts && composer install --no-scripts
RUN composer dump-autoload
RUN chmod -R 755 /var/www/html/vendor

# RUN cp .env.example .env

RUN chown -R www-data:www-data /var/www/html

RUN php artisan key:generate

# CMD php artisan serve --host=0.0.0.0 --port=80
