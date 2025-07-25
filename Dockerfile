FROM mcr.microsoft.com/playwright:v1.43.0-jammy

WORKDIR /app

COPY . .
RUN npm ci
RUN npx playwright install --with-deps

CMD ["npx", "playwright", "test"]

#TO Run docker tests
#docker build -t playwright-tests .
#docker run --rm -e HEADLESS=true --env-file=.env playwright-tests